import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Modal from 'react-native-modal';
import { themeStyleSheet } from '../../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import Buttons from '../../common/Buttons';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { postIssue } from '../../../SyncServices';

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = Math.round(width * 1);

const Issue = ({ item, socket }) => {

    const [showImg, setShowImg] = useState(false);
    const [img, setImg] = useState('');
    const [showMap, setShowMap] = useState(false);

    const acceptIssue = (item) => {
        console.log(item);

        let params = {
            issue_id: Number(item.id),
            assigned_to: true,
            status: 'ACCEPTED'
        }

        postIssue(params).then(res => {
            //Update List
            try {
                socket.send(JSON.stringify({
                    message: `accepted ${item.id}`
                }))
            } catch (err) {
                console.log('errrr ', err)
            }
        }).catch(err => {
            //Show Toast
        })
    }

    const toggleImg = () => {
        setShowImg(prev => !prev);
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => {
                toggleImg()
                setImg(item.image_url)
            }} style={styles.carouselItem}>
                <Image source={{ uri: item.image_url }} resizeMode={'contain'} style={{ width: 400, height: 300 }} />
            </TouchableOpacity>
        );
    };

    return (
        <>
            <TouchableOpacity
                // onPress={() => navigateToPost()}
                style={styles.postContainer}
            >
                <View style={styles.innerPost}>
                    <View style={styles.authorRow}>
                        <View style={styles.author}>
                            <TouchableOpacity style={styles.profileContainer}>
                                <Text style={styles.profileText}>{item.created_by?.substring(0, 1).toUpperCase()}</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    width: width * 0.78,
                                }}
                            >
                                <View>
                                    <Text style={styles.authorName}>{item.created_by}</Text>
                                    <View
                                        style={{
                                            alignItems: "center",
                                            flexDirection: 'row',
                                            marginLeft: 10,
                                        }}
                                    >
                                        <Icon
                                            name='clock'
                                            size={16}
                                            color={themeStyleSheet.mainColor}
                                        />
                                        <Text style={styles.created_at}>{moment(item.created_at).format('DD-MMM-YYYY hh:mm A')}</Text>
                                    </View>
                                </View>
                                {item.landmark ? (
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: "center",
                                        }}
                                    >
                                        <Icon
                                            onPress={item.longitude && item.lattitude ? () => setShowMap(true) : () => alert('Pin location not available')}
                                            name='location'
                                            size={27}
                                            color={themeStyleSheet.mainColor}
                                        />
                                        <Text
                                            numberOfLines={1}
                                        >{item.landmark}</Text>
                                    </View>
                                ) : null}
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}
                        >{item.title}</Text>
                    </View>
                    <Text style={styles.contentContainer}>{item.content}</Text>
                    {item.issue_images.length > 0 ? (
                        <View style={styles.carouselContainer}>
                            <Carousel
                                data={item.issue_images}
                                renderItem={renderItem}
                                sliderWidth={width}
                                itemWidth={ITEM_WIDTH}
                                inactiveSlideShift={0}
                                enableSnap
                            />
                        </View>
                    ) : null}
                    <View style={styles.reactionInfo}>
                        <View style={styles.align}>
                            <Icon
                                name='like'
                                size={20}
                                color={themeStyleSheet.mainColor}
                            />
                            <Text>{item.liked_by.length}</Text>
                        </View>
                    </View>
                    <View style={styles.likeCommentContainer}>
                        {item.status == 'Pending' ? (
                            <Buttons
                                onPress={() => acceptIssue(item)}
                                type={'primary'}
                                title={'Accept'}
                            />
                        ) : (
                            <Text>{`Assigned to ${item.assigned_to_name}`}</Text>
                        )}
                    </View>
                </View>
            </TouchableOpacity>
            <Modal
                isVisible={showImg}
                style={{ margin: 0 }}
                onBackdropPress={toggleImg}
                onBackButtonPress={toggleImg}
                useNativeDriver
            >
                <View style={styles.modalContainer}>
                    <Image
                        source={{ uri: img }}
                        height={150}
                        width={150}
                        resizeMode='contain'
                        style={styles.img}
                    ></Image>
                </View>
            </Modal>
            {item.lattitude && item.longitude ? (
                <Modal
                    isVisible={showMap}
                    style={{ margin: 0 }}
                    onBackdropPress={() => setShowMap(false)}
                    onBackButtonPress={() => setShowMap(false)}
                    useNativeDriver
                >
                    <View style={styles.container}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={{ ...StyleSheet.absoluteFillObject }}
                            region={{
                                latitude: parseFloat(item.lattitude),
                                longitude: parseFloat(item.longitude),
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        >
                            <Marker
                                //   key={index}
                                coordinate={{ latitude: parseFloat(item.lattitude), longitude: parseFloat(item.longitude) }}
                                title={item.landmark}
                                description={item.content}
                            />
                        </MapView>
                    </View>
                </Modal>
            ) : null}
        </>
    )
}

export default Issue;
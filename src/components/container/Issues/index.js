import React, { useEffect, useState } from 'react';
import {
    FlatList,
    RefreshControl,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { themeStyleSheet } from '../../../constants';
import { getIssues } from '../../../SyncServices';
import Issue from './Issue';
// import { useDispatch, useSelector } from 'react-redux';
// import { postToRedux } from '../../../redux/actions';
// import { getPosts } from '../../../SyncServices';
// import Buttons from '../../common/Buttons';
// import Post from './Post';
import styles from './styles';

const Issues = ({ navigation }) => {

    const user = useSelector(state => state.user);

    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleData();
    }, [])

    const handleData = () => {
        setLoading(true);

        getIssues().then(res => {
            setLoading(false);
            setIssues(res.results);
            console.log('rt', res)
        })
    }

    return (
        <>
            <SafeAreaView style={styles.notchContainer} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{'Issues'}</Text>

                    <TouchableOpacity
                        style={styles.profileContainer}
                    // onPress={handleProfile}
                    >
                        <Text style={styles.profileText}>
                            {'H'}
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        backgroundColor: themeStyleSheet.white,
                        paddingVertical: 10,
                        marginVertical: 10,
                        borderRadius: 40,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyIssues')}
                        style={{
                            width: '90%',
                            alignSelf: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: 16,
                                color: themeStyleSheet.mainColor
                            }}
                        >My Issues </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    marginHorizontal: 5,
                                    color: themeStyleSheet.mainColor
                                }}
                            >7</Text>
                            <Icon
                                name='chevron-right'
                                size={24}
                                color={themeStyleSheet.mainColor}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {issues.length > 0 ? (
                    <FlatList
                        refreshControl={<RefreshControl
                            colors={["#9Bd35A", "#689F38"]}
                            refreshing={loading}
                            onRefresh={handleData} />}
                        data={(issues).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))}
                        renderItem={({ item, index }) => {
                            console.log(item.issue_images);
                            return (
                                <Issue
                                    item={item}
                                    navigation={navigation}
                                />
                            )
                        }}
                        ListFooterComponent={() => {
                            return (
                                <View style={styles.bottomList} />
                            )
                        }}
                    />
                ) : (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../../assets/images/noissues.png')} resizeMode='contain' style={{ height: 200, width: 200, top: -50 }} />

                        <Text style={{ fontSize: 16 }}>No issues have been reported</Text>
                    </View>
                )}

                <View style={styles.fabContainer}>
                    {/* <Buttons
                        type="primary"
                        title={'Create a Post'}
                        onPress={handleCreatePost}
                    /> */}
                </View>
            </SafeAreaView>
        </>
    )
}

export default Issues;
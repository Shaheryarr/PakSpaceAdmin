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
import Issue from './Issue';
// import { useDispatch, useSelector } from 'react-redux';
// import { postToRedux } from '../../../redux/actions';
// import { getPosts } from '../../../SyncServices';
// import Buttons from '../../common/Buttons';
// import Post from './Post';
import styles from './styles';

const Issues = ({ navigation }) => {

    const issues = [
        {
            id: 1,
            images: ['https://habib.edu.pk/ethnographylab/wp-content/uploads/2017/10/1-7.jpg',],
            title: 'Jauhar Chorangi',
            content: `The road from Jauhar Chorangi to Kamran Chaurangi is broken and needs to be looked at !`,
            created_by: 'Hasan',
            votes: 20,
            assigned_to: '',
            status: 'Pending',
            created_at: 1633770171919,
            location: [24.912266, 67.125673],
            landmark: 'Jauhar'
        },
        {
            id: 2,
            images: ['https://i5.paktive.com/f/1436646577_9b13011f77_m.jpg', 'https://media.zameen.com/thumbnails/7175081-400x300.jpeg'],
            title: 'Traffic Light not working',
            content: `The traffic light at disco bakery does not work`,
            created_by: 'Hasan',
            votes: 20,
            assigned_to: 'FixIt',
            status: 'Accepted',
            created_at: 1612760171919,
            location: [],
            landmark: 'Gulshan'
        }
    ]

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

                {issues.length > 0 ? (
                    <FlatList
                        // refreshControl={<RefreshControl
                        //     colors={["#9Bd35A", "#689F38"]}
                        //     refreshing={isRefresh}
                        //     onRefresh={getData} />}
                        data={(issues).sort((a, b) => new Date(b.created_at) - new Date(a.created_at))}
                        renderItem={({ item, index }) => {
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
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import SlideFeed from './SlideFeed';
import FooterFeed from './FooterFeed';
import HeaderFeed from './HeaderFeed';

const Feed = () => {

        return (

            <View style={{flex: 1, marginTop: 25, borderColor: '#ddd', borderTopWidth: 2, borderBottomWidth: 2, borderRadius: 5}}>

                <HeaderFeed />


                    <SlideFeed />


                <FooterFeed />

            </View>

        );
};

export default Feed;
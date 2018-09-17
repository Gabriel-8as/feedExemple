import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import SlideFeed from './SlideFeed';
import FooterFeed from './FooterFeed';
import HeaderFeed from './HeaderFeed';

const Feed = () => {

        return (

            <View style={{flex: 1, marginTop: 25, alignItems: 'center'}}>
                <View style={{flex: 1, borderColor: '#ddd', borderLeftWidth: 1, borderRightWidth: 1, borderTopWidth: 2, borderBottomWidth: 2, borderRadius: 5, maxWidth: 500}}>

                    <HeaderFeed />

                    <SlideFeed />

                    <FooterFeed />
                </View>

            </View>

        );
};

export default Feed;
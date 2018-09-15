import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Feed from './components/Feed';

import Carousel from 'react-native-carousel-view';

export default class App extends React.Component {

  render() {

    return (
        <ScrollView>
            <Feed />
            <Feed />
        </ScrollView>
    );
  }
}


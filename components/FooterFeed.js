import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const FooterFeed = () => {

    const feedFooter = [
        {
            date: 'HÁ 25 DIAS ATRÁS',
            description: 'asdasdsadasdasdddddddddddddddddddddddddddddddddddddddddddddddddddd'
        },
    ];

    return (

        <View style={{flex: 1, padding: 15}}>

            <View style={{flex: 1, paddingBottom: 15}}>

                {feedFooter.map(feedFooter => (
                    <Text key={feedFooter.date} style={{color: '#767e8a', fontSize: 12}}> {feedFooter.date} </Text>
                ))}

            </View>

            <View style={{flex: 1, paddingBottom: 15}}>

                {feedFooter.map(feedFooter => (
                    <Text key={feedFooter.description} style={{color: '#5a5a5a', fontSize: 16}}> {feedFooter.description} </Text>
                ))}

            </View>

            <View style={{flex: 1, paddingTop: 15, flexGrow: 1}}>
                <View style={{flex: 1, flexGrow: 1, flexDirection: 'row'}}>

                    <View style={{flex: 1, height: 40, borderColor: '#000', borderWidth: 1}}>

                    </View>

                    <View style={{flex: 1, height: 40, borderColor: '#000', borderWidth: 1}}>

                    </View>

                    <View style={{flex: 1, height: 40, borderColor: '#000', borderWidth: 1}}>

                    </View>

                    <View style={{flex: 1, height: 40, borderColor: '#000', borderWidth: 1}}>

                    </View>

                </View>
            </View>

        </View>

    );
};

export default FooterFeed;
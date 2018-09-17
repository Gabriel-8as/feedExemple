import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'

const FooterFeed = () => {

    const feedFooter = [
        {
            date: 'HÁ 25 DIAS ATRÁS',
            description: 'Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação.'
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

                    <View style={{flex: 1, height: 40, borderColor: '#000', borderWidth: 1, flexDirection: 'row'}}>

                        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>s2</Text>
                        </View>

                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>0</Text>
                        </View>

                    </View>

                    <View style={{flex: 1, height: 40, borderColor: '#000', borderWidth: 1, flexDirection: 'row'}}>

                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>*</Text>
                        </View>

                    </View>

                    <View style={{flex: 2, height: 40, borderColor: '#000', borderWidth: 1, flexDirection: 'row'}}>

                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>></Text>
                        </View>

                        <View style={{flex: 3, justifyContent: 'center'}}>
                            <Text>Mensagem</Text>
                        </View>

                    </View>

                    <View style={{flex: 2, height: 40, borderColor: '#000', borderWidth: 1, flexDirection: 'row'}}>

                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>@</Text>
                        </View>

                        <View style={{flex: 3, justifyContent: 'center'}}>
                            <Text>Compartilhar</Text>
                        </View>

                    </View>

                </View>
            </View>

        </View>

    );
};

export default FooterFeed;
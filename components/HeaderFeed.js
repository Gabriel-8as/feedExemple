import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HeaderFeed = () => {

    const feedHeader = [
        {
            img: 'http://gtamultimidia.com.br/imgs/Instagram.png',
            nome: 'Confecções Cerantola'
        },
    ];

    return (

        <View style={{height: 70, flexDirection: 'row', borderColor: '#eaeaea', borderBottomWidth: 1, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5}}>

            <View style={{flex: 2, width: 40, borderColor: '#ddd', borderWidth: 1, backgroundColor: '#fafafa', borderRadius: 5}}>
                <Image style={{flex: 1, width: undefined, height: undefined, borderRadius: 5}} source={{uri: 'http://gtamultimidia.com.br/imgs/Instagram.png'}} />
            </View>

            <View style={{flex: 7, justifyContent: 'center', paddingLeft: 15}}>

                {feedHeader.map(feedHeader => (
                    <Text key={feedHeader.nome} style={{fontSize: 18, color: '#484848'}}> {feedHeader.nome} </Text>
                ))}

            </View>

            <View style={{flex: 1, borderColor: 'black', borderWidth: 1, paddingTop: 15}}>

            </View>

        </View>

    );
};

export default HeaderFeed;
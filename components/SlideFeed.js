import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Carousel from "react-native-carousel-view";

const SlideFeed = () => {

    return (

        <View style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View style={styles.container}>
                <Carousel
                    width={375}
                    height={300}
                    delay={1000000000}
                    indicatorAtBottom={true}
                    indicatorSize={20}
                    indicatorColor="red"
                >
                    <View style={styles.contentContainer}>
                        <View style={{flex: 1}}>
                            <Image style={styles.imagesSlide} source={{uri: 'https://atacadodecamisetas.com.br/179-large_default/camiseta-lisa-algodao-masculina-verde-mirage.jpg'}} />
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={{flex: 1}}>
                            <Image style={styles.imagesSlide} source={{uri: 'https://atacadodecamisetas.com.br/228-large_default/camiseta-lisa-algodao-masculina-cinza-mescla.jpg'}} />
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={{flex: 1}}>
                            <Image style={styles.imagesSlide} source={{uri: 'https://atacadodecamisetas.com.br/41-large_default/camiseta-lisa-algodao-masculina-vermelha.jpg'}} />
                        </View>
                    </View>
                </Carousel>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagesSlide: {
        flex: 1,
        width: 300,
    }
});

export default SlideFeed;


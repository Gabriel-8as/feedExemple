import React from 'react';
import {View, Text} from "react-native";
import styled from "styled-components/native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import InputPadrao from "../components/InputPadrao";
import SlideExplorer from "../components/SlideExplorer";

export default class ExplorerPage extends React.Component {

    constructor(props) {
        super();
        this.state = {
            errors: []
        };
    }

    render = () => {

        return (

            <View style={{flex: 1, marginTop: 25, alignItems: 'center'}}>

                <InputPadrao />

                <View style={{width: '90%', height: 20, flexDirection: 'row',
                    marginTop: 30, justifyContent: 'space-between'}}>

                    <Text style={{width: '65%', fontSize: 16, color: '#a2a2a2', fontWeight: 'bold'}}>
                        SUGESTÕES DE MARCAS
                    </Text>

                    <Text style={{width: '30%', height: 20, color: '#a7a7a7', fontSize: 14, alignContent: 'center'}}>
                        Ver mais >
                    </Text>
                </View>

                <SlideExplorer />

            </View>

        );
    }
}
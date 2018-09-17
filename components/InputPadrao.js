import {TextInput, Text, View} from "react-native";
import React from "react";

export default class InputPadrao extends React.Component{

    constructor(props){
        super();
        this.state = {
            buscar: ''
        }
    }

    render(){
        return (
            <View style={{height: 50, width: '90%', flexDirection: 'row', marginTop: 30, justifyContent: 'space-between'}}>

            <TextInput
                style={{width: '65%', height: '100%', fontSize: 16, borderColor: '#c7c7c7', borderWidth: 1, backgroundColor: '#f6f6f6', padding: 5, borderRadius: 5}}
                onChangeText={(buscar) => this.setState({buscar})}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder={'Buscar...'}
                value={this.state.buscar}
            />

                <View style={{width: '30%', height: '100%', alignItems: 'center',
                    borderColor: '#c7c7c7', borderWidth: 1, backgroundColor: '#fff', borderRadius: 5}}>
                    <Text style={{flex: 1, fontSize: 14, color: '#a7a7a7', justifyContent: 'center', alignItems: 'center', paddingTop: 14}}>
                        Filtrar
                    </Text>
                </View>

            </View>
        );
    }
};


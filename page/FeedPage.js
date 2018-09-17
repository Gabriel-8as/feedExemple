import React from 'react';
import {ScrollView} from "react-native";
import Feed from "../components/Feed";

export default class FeedPage extends React.Component {

    render() {
        return (
            <ScrollView>
                <Feed />
                <Feed />
            </ScrollView>
        );
    }
}
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'
import FeedPage from "../page/FeedPage";
import ExplorerPage from "../page/ExplorerPage";

export class Feed extends React.Component {

    render() {
        return (
            <FeedPage />
        );
    }
}

export class Explorer extends React.Component {

    render() {
        return (
            <ExplorerPage />
        );
    }
}

export default createBottomTabNavigator({
    Feed: Feed,
    Explorer: Explorer,
});
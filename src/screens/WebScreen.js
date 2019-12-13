import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default class WebScreen extends React.Component {
    render() {
        return (
            <View style={style.body}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{uri: 'https://www.digistyle.com/'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </View>
        );
    }
}


const style = {
    body: {
        flex: 1,
    },
};

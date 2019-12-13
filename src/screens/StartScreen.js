import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import {getProducts} from '../actions';

class StartScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            NetInfo.fetch().then(state => {
                if (state.isConnected) {
                    setTimeout(() => {
                        // this.props.getProducts(this.props.navigation);
                        this.props.navigation.navigate('main');
                    }, 500);
                } else {
                    this.props.navigation.navigate('errorConnection');
                }
            });
        }, 700);
    }

    render() {
        return (
            <View style={style.body}>
                <Image source={require('../assets/image/digikala-logo.png')} style={style.logo}/>
                <ActivityIndicator size="large" color="#FFF" style={style.loading}/>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (navigation) => dispatch(getProducts(navigation)),
    };
};

export default connect(null, mapDispatchToProps)(StartScreen);



const style = {
    body: {
        flex: 1,
        backgroundColor: '#ef394f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 50,
    },
    loading: {
        position: 'absolute',
        bottom: 0,
    },
};

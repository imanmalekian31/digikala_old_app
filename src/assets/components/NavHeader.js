import React, {Component} from 'react';
import {Image, View, TouchableWithoutFeedback, TouchableOpacity, StatusBar} from 'react-native';
import {Body, Header, Text, Left, Right} from 'native-base';
import {Badge} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';


class NavHeader extends Component {
    render() {
        const {onPress, rightIcon, navigation, screen, title} = this.props;
        return (
            <Header style={{backgroundColor: '#ef394f'}}>
                <StatusBar backgroundColor="#ef394f" barStyle="dark-light"/>
                <Left style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableWithoutFeedback onPress={onPress}>
                        <Icon name={rightIcon} size={30} color="#fff"/>
                    </TouchableWithoutFeedback>
                    {screen === 'Home' ? <Image source={require('../image/logo.png')} style={style.digilogo}/> :
                        <Text style={style.title}>{title}</Text>}
                </Left>
                {screen === 'Home' ? <Right>
                    <TouchableOpacity activeOpacity={.8}>
                        <Icon name='magnify' size={25} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} onPress={() => this.props.navigation.navigate('cart')}>
                        <Icon name='cart' size={25} color="#fff" style={{marginLeft: 20, marginRight: 20}}/>
                        {this.props.cart.length === 0 ? null :
                            <Badge
                                status="success"
                                value={this.props.cart.length}
                                containerStyle={{position: 'absolute', top: -6, right: 35}}
                                badgeStyle={{borderWidth: 1, borderColor: '#ef394f', backgroundColor: '#fff'}}
                                textStyle={{color: '#ef394f', fontSize: 12, fontWeight: 'bold'}}
                            />
                        }

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} onPress={() => this.props.navigation.navigate('profile')}>
                        <Icon name='account' size={25} color="#fff"/>
                    </TouchableOpacity>
                </Right> : null}
                {screen === 'productDetails' ? <Right>
                    <TouchableOpacity activeOpacity={.8} onPress={() => this.props.navigation.navigate('cart')}>
                        <Icon name='cart' size={25} color="#fff" style={{marginLeft: 20, marginRight: 20}}/>
                        {this.props.cart.length === 0 ? null :
                            <Badge
                                status="success"
                                value={this.props.cart.length}
                                containerStyle={{position: 'absolute', top: -6, right: 35}}
                                badgeStyle={{borderWidth: 1, borderColor: '#ef394f', backgroundColor: '#fff'}}
                                textStyle={{color: '#ef394f', fontSize: 12, fontWeight: 'bold'}}
                            />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8}>
                        <Icon name='dots-vertical' size={25} color="#fff"/>
                    </TouchableOpacity>
                </Right> : null}
                {screen === 'cart' ? <Right>
                    <TouchableOpacity activeOpacity={.8} onPress={() => this.props.navigation.navigate('cart')}>
                        <Icon name='cart' size={25} color="#fff" style={{marginLeft: 20, marginRight: 20}}/>
                        {this.props.cart.length === 0 ? null :
                            <Badge
                                status="success"
                                value={this.props.cart.length}
                                containerStyle={{position: 'absolute', top: -6, right: 35}}
                                badgeStyle={{borderWidth: 1, borderColor: '#ef394f', backgroundColor: '#fff'}}
                                textStyle={{color: '#ef394f', fontSize: 12, fontWeight: 'bold'}}
                            />
                        }
                    </TouchableOpacity>
                </Right> : null}
            </Header>
        );
    }
}

const mapStateToProps = (state) => {
    const {cart} = state.auth;
    return {
        cart,
    };
};

export default withNavigation(connect(mapStateToProps, null)(NavHeader));


const style = {
    menuIcon: {
        height: 20,
        width: 20,
        marginLeft: 10,
        transform: [{rotate: '180deg'}],
    },
    addressTitle: {
        fontFamily: 'IRANSansMobile',
        fontSize: 8,
        color: '#ff7cc5',
    },
    address: {
        fontFamily: 'IRANSansMobile',
        fontSize: 14,
        color: '#fff',
    },
    addressArrow: {
        height: 10,
        width: 10,
        marginLeft: 10,
        marginTop: 25,
    },
    mailIcon: {
        height: 23,
        width: 23,
        marginRight: 8,
    },
    digilogo: {
        width: 80,
        height: 40,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    title: {
        fontFamily: 'IRANSansMobile',
        color: '#fff',
        marginLeft: 10,
    },
};

import React from 'react';
import {View, Text, Image} from 'react-native';

export default class CartSellFormatApp extends React.Component {

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' تومان ';
    }

    render() {
        const {image, cost, discount, description} = this.props;
        return (
            <View style={style.cardBody}>
                <View style={style.imageBody}>
                    <View style={{flex: 1, width: '100%'}}>
                        <Image
                            style={style.image}
                            source={{uri: image[0]}}/>
                    </View>
                </View>
                <View style={style.textBody}>
                    <Text style={style.textDis}>{description}</Text>
                </View>
                <View style={style.costBody}>
                    <View>
                        {discount === 0 ? null :
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={style.specialText}>پیشنهاد ویژه</Text>
                                <Text style={style.prevCost}>{this.formatNumber(cost)}</Text>
                            </View>
                        }

                        <Text style={style.cost}> {this.formatNumber(cost * (100 - discount) / 100)}</Text>
                    </View>
                </View>
            </View>

        );
    }
}


const style = {
    cardBody: {
        width: '95%',
        height: 240,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 0.1,
        marginTop: 5,
        marginLeft: 5,
    },
    imageBody: {
        height: 130,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 5,
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        flex: 1,
    },
    express: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 4,
        paddingRight: 4,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 4,
    },
    textBody: {
        padding: 5,
        width: '100%',
        height: 50,
    },
    textDis: {
        textAlign: 'left',
        fontFamily: 'IRANSansMobile',
        fontSize: 12,
        height: 35,
    },
    costBody: {
        borderTopWidth: 0.2,
        borderColor: '#ddd',
        padding: 7,
        paddingRight: 15,
        height: 60,
        width: '100%',
        justifyContent: 'center',
    },
    prevCost: {
        textDecorationLine: 'line-through',
        fontFamily: 'IRANSansNumber',
        textAlign: 'right',
        justifyContent: 'space-between',
        color: '#fb3449',
        fontSize: 12,
    },
    cost: {
        fontFamily: 'IRANSansNumber',
        textAlign: 'right',
        color: '#66bb6a',
        fontSize: 14,
    },
    specialText: {
        textDecorationLine: 'none',
        color: '#fff',
        backgroundColor: 'red',
        fontFamily: 'IRANSansMobile',
        fontSize: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 5,
        paddingLeft: 5,
        borderRadius: 3,
    },

};


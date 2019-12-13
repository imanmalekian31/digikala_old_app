import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Icon, Button} from 'native-base';


export default class ErrorConnection extends React.Component {
    render() {
        return (
            <View style={style.body}>
                <Image source={require('../assets/image/wifi-strength-off.png')} style={{width: 50, height: 50}}/>
                <Text style={{fontFamily: 'IRANSansMobile'}}>خطا در اتصال به اینترنت!</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <Icon name="wifi" style={{color: '#747474'}}/>
                    <Text style={{fontFamily: 'IRANSansMobile', marginLeft: 10, color: '#747474'}}>بررسی تنظیمات
                        شبکه</Text>
                </View>
                <TouchableOpacity activeOpacity={.9} style={{
                    backgroundColor: '#ef394f',
                    marginTop: 20,
                    width: '65%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 2,
                }}
                                  onPress={() => this.props.navigation.navigate('start')}>
                    <Text style={{fontFamily: 'IRANSansMobile', color: '#fff'}}>تلاش مجدد</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const style = {
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

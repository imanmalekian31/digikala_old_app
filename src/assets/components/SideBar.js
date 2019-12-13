import React, {Component} from 'react';
import {
    View,
    Image,
    SafeAreaView,
    Text,
    ScrollView,
    TouchableWithoutFeedback, StatusBar,
} from 'react-native';
import SideBarItem from './SideBarItem';
import ProductScrollView from './ProductScrollView';


export default class SideBar extends Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1}} forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={style.header}>
                    <Image source={require('../image/background.png')} style={style.headerBackground}/>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('profile')}>
                        <View style={style.headerName}>
                            <Text style={{fontFamily: 'IRANSansMobile', color: '#fff'}}>ایمان ملکیان</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <SideBarItem name={'خانه'} nav={'home'} icon={'home'}/>
                    <SideBarItem name={'لیست دسته بندی محصولات'} type='' page="" nav={'category'} icon={'format-list-bulleted'}/>
                    <View style={{width: '100%', height: 1, backgroundColor: '#758d9e', opacity: 0.3, marginTop: 7}}/>
                    <SideBarItem name={'سبد خرید'} nav={'cart'} icon={'cart'}/>
                    <SideBarItem name={'پیشنهاد ویژه دیجی کالا'} nav={'more'} type='پیشنهاد ویژه دیجی کالا' page="0" icon={'star'}/>
                    <SideBarItem name={'پرفروش ترین ها'} nav={'more'} type='محصولات پرفروش' page="1" icon={'star'}/>
                    <SideBarItem name={'پربازدید ترین ها'} nav={'more'} type='پربازدید ترین ها' page="1" icon={'star'}/>
                    <SideBarItem name={'جدیدترین ها'} nav={'more'} type='جدیدترین محصولات' page="2" icon={'star'}/>
                    <View style={{width: '100%', height: 1, backgroundColor: '#758d9e', opacity: 0.3, marginTop: 7}}/>
                    <SideBarItem name={'تنظیمات'} nav={'home'} icon={'settings'}/>
                    <SideBarItem name={'سوالات متداول'} nav={'home'} icon={'help-circle-outline'}/>
                    <SideBarItem name={'درباره ما'} nav={'home'} icon={'basket'}/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const style = {
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'repeat',
    },
    goBackArrow: {
        width: 20,
        height: 20,
        transform: [{rotate: '180deg'}],
        position: 'absolute',
        top: 10,
        left: 10,
    },
    header: {
        backgroundColor: '#fff',
        height: '15%',
        width: '100%',
    },
    headerBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.3,
    },
    headerName: {
        backgroundColor: '#ef394f',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderTopRightRadius: 0,
        width: 100,
        padding: 5,
        position: 'absolute',
        top: 30,
        left: 100,
    },
};

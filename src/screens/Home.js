import React from 'react';
import {View, Text, ScrollView, Dimensions, Image, I18nManager, TouchableWithoutFeedback} from 'react-native';
import SlideShow from '../assets/components/SlideShow';
import HomeCategory from '../assets/components/HomeCategory';
import ProductScrollView from '../assets/components/ProductScrollView';
import CountDown from 'react-native-countdown-component';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import LottieView from 'lottie-react-native';


let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

class Home extends React.Component {
    componentWillMount() {
        I18nManager.forceRTL(true);
    }

    render() {
        return (
            <View style={{backgroundColor: '#ddd'}}>
                <ScrollView>
                    <SlideShow/>
                    <HomeCategory/>
                    <ProductScrollView items={this.props.digitalTools[0]} type='wonder'/>
                    <View style={style.body}>
                        <TouchableWithoutFeedback onPress={() => {
                            this.props.navigation.navigate('web');
                        }}>
                            <Image
                                source={{uri: 'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000007361.jpg'}}
                                style={style.image}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <ProductScrollView items={this.props.digitalTools[1]} type='محصولات پرفروش' page="1"/>
                    <ProductScrollView items={this.props.digitalTools[2]} type='جدیدترین محصولات' page="2"/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {digitalTools} = state.auth;
    return {
        digitalTools,
    };
};


export default withNavigation(connect(mapStateToProps, null)(Home));


const style = {
    wonder: {
        width: '100%',
        height: 70,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    wonderImage: {
        height: 50,
        width: 150,
        resizeMode: 'contain',
        marginLeft: 5,
    },
    body: {
        height: 150,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        height: 120,
    },
};

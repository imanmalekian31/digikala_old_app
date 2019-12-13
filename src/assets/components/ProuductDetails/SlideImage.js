import React from 'react';
import {View, ScrollView, Image, Dimensions, Animated} from 'react-native';

let width = Dimensions.get('window').width;
export default class SlideImage extends React.Component {
    scrollX = new Animated.Value(0);

    constructor(props) {
        super(props);
        this.state = {
            imageUrls: [
                // 'https://dkstatics-public.digikala.com/digikala-products/5399532.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80',
                // 'https://dkstatics-public.digikala.com/digikala-products/5399543.jpg?x-oss-process=image/resize,h_800/quality,q_80',
                // 'https://dkstatics-public.digikala.com/digikala-products/5399545.jpg?x-oss-process=image/resize,h_800/quality,q_80',
                // 'https://dkstatics-public.digikala.com/digikala-products/5399550.jpg?x-oss-process=image/resize,h_800/quality,q_80',
                // 'https://dkstatics-public.digikala.com/digikala-products/5399548.jpg?x-oss-process=image/resize,h_800/quality,q_80',
            ],
        };
    }

    componentWillMount(){
        this.setState({imageUrls : this.props.image})
    }

    renderItems() {
        return this.state.imageUrls.map((address, index) => {
            return (
                <View key={index} style={style.body}>
                    <Image
                        source={{uri: address}}
                        style={style.image}/>
                </View>
            );
        });
    }



    render() {
        let position = Animated.divide(this.scrollX, width);

        return (
            <View style={{height: 250, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width, height: 250}}>
                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: this.scrollX}}}])}
                        scrollEventThrottle={16}
                    >
                        {this.renderItems()}
                    </ScrollView>
                </View>
                <View style={{flexDirection: 'row-reverse', position: 'relative', top: 0}}>
                    {this.state.imageUrls.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp',
                        });
                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    opacity,
                                    height: 5,
                                    width: 5,
                                    backgroundColor: '#908b8d',
                                    margin: 5,
                                    borderRadius: 5,
                                }}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }
}

const style = {
    body: {
        // backgroundColor: '#a83ceb',
        height: 250,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        flex: 1,
        resizeMode: 'contain',
    },
};

import React from 'react';
import {View, ScrollView, Image, Dimensions, Animated} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
export default class SlideShow extends React.Component {
  scrollX = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000007341.jpg',
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000006824.jpg',
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000007541.jpg',
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000007442.jpg',
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000007640.jpg',
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000007428.jpg',
        'https://dkstatics-public.digikala.com/digikala-adservice-banners/1000007508.jpg',
      ],
    };
  }

  renderItems() {
    return this.state.imageUrls.map((address, index) => {
      return (
        <View key={index} style={style.body}>
          <Image source={{uri: address}} style={style.image} />
        </View>
      );
    });
  }

  render() {
    let position = Animated.divide(this.scrollX, width);

    return (
      <View
        style={{height: 180, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width, height: 180}}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {nativeEvent: {contentOffset: {x: this.scrollX}}},
            ])}
            scrollEventThrottle={16}>
            {this.state.imageUrls.map((source, i) => {
              return (
                <View key={i} style={style.body}>
                  <Image source={{uri: source}} style={style.image} />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            position: 'relative',
            top: -30,
          }}>
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
                  height: 8,
                  width: 8,
                  backgroundColor: '#fff',
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
    backgroundColor: '#a83ceb',
    height: 180,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    flex: 1,
    // resizeMode : 'contain',
  },
};

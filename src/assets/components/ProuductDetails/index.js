import React from 'react';
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';
import Welcome from './Welcome';
import Foreground from './Foreground';
import Background from './Background';

export default class Product extends React.Component {
  render() {
    const {navigation} = this.props;
    const product = navigation.getParam('product');
    return (
      <ParallaxScroll
        headerHeight={0}
        isHeaderFixed={false}
        parallaxHeight={300}
        renderParallaxBackground={({animatedValue}) => (
          <Background animatedValue={animatedValue} />
        )}
        renderParallaxForeground={({animatedValue}) => (
          <Foreground animatedValue={animatedValue} images={product.image} />
        )}
        parallaxBackgroundScrollSpeed={5}
        parallaxForegroundScrollSpeed={2.5}>
        <Welcome {...product} product={product} />
      </ParallaxScroll>
    );
  }
}

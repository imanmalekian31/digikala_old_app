import React, {Component} from 'react';
import {View, ScrollView, Image, Dimensions, Animated} from 'react-native';
import SlideImage from './SlideImage';

export default class Header extends Component {
  styles = {
    wrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  render() {
    return (
      <View style={this.styles.wrapper} pointerEvents="box-none">
        <SlideImage image={this.props.images} />
      </View>
    );
  }
}

import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {deleteCart} from '../../actions';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';

class CartSell extends React.Component {
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' تومان ';
  }

  render() {
    const {description, EN_description, cost, image, color, num} = this.props;
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
          border: 0.5,
          borderRadius: 2,
          marginTop: 10,
        }}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: image[0]}} />
          <View style={{width: '80%', flex: 1, padding: 10}}>
            <Text style={{fontFamily: 'IRANSansMobile', textAlign: 'left'}}>
              {EN_description}
            </Text>
            <Text
              style={{
                fontFamily: 'IRANSansMobile',
                textAlign: 'left',
                color: '#a7a7a7',
                fontSize: 10,
              }}>
              {description}
            </Text>
            <Text style={{fontFamily: 'IRANSansMobile', fontSize: 12}}>
              رنگ : <Text style={{color: 'gray'}}>{color[0]}</Text>
            </Text>
            <Text style={{fontFamily: 'IRANSansMobile', fontSize: 12}}>
              تعداد :{' '}
              <Text style={{color: 'gray', fontFamily: 'IRANSansNumber'}}>
                1
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fbfbfb',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderColor: '#f0f0f0',
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
          }}>
          <Text style={{fontFamily: 'IRANSansMobile', color: '#66bb6a'}}>
            قیمت نهایی
          </Text>
          <Text
            style={{
              fontFamily: 'IRANSansNumber',
              color: '#66bb6a',
              fontSize: 20,
            }}>
            {this.formatNumber(cost)}
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.deleteCart(num);
          }}>
          <View style={{padding: 15}}>
            <Text
              style={{
                fontFamily: 'IRANSansMobile',
                textAlign: 'right',
                color: '#fb3449',
              }}>
              حذف
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCart: item => dispatch(deleteCart(item)),
  };
};

export default withNavigation(
  connect(
    null,
    mapDispatchToProps,
  )(CartSell),
);

const style = {
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';

class ScrollViewCard extends React.Component {
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' تومان ';
  }

  render() {
    const {description, cost, express, discount, image} = this.props;
    let check = true;
    if (discount === 0) {
      check = false;
    }
    return (
      <View style={[style.cardBody, check ? {height: 240} : {height: 220}]}>
        <View style={style.imageBody}>
          <View style={{flex: 1, width: '100%'}}>
            <Image style={style.image} source={{uri: image[0]}} />
            {express ? (
              <View style={style.express}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../image/express.png')}
                />
              </View>
            ) : null}
          </View>
        </View>
        <View style={style.textBody}>
          <Text style={style.textDis}>{description}</Text>
        </View>
        <View style={[style.costBody, check ? {height: 60} : {height: 40}]}>
          {discount === 0 ? null : (
            <Text style={style.prevCost}>{this.formatNumber(cost)}</Text>
          )}

          <Text style={style.cost}>
            {' '}
            {this.formatNumber(cost * ((100 - discount) / 100))}
          </Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(ScrollViewCard);
const style = {
  cardBody: {
    width: 150,
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
    textDecorationStyle: 'solid',
    fontFamily: 'IRANSansNumber',
    textAlign: 'right',
    color: '#fb3449',
    fontSize: 12,
  },
  cost: {
    fontFamily: 'IRANSansNumber',
    textAlign: 'right',
    color: '#66bb6a',
    fontSize: 14,
  },
};

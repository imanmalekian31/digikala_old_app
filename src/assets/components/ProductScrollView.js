import React from 'react';
import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import ScrollViewCard from './ScrollViewCard';
import {connect} from 'react-redux';
import CountDown from 'react-native-countdown-component';
import {getProducts} from '../../actions';
import {withNavigation} from 'react-navigation';

class ProductScrollView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentWillMount() {
    this.setState({products: this.props.items});
  }

  renderItems() {
    return this.state.products.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          onPress={() =>
            this.props.navigation.navigate('productDetails', {
              product: item,
            })
          }>
          <ScrollViewCard {...item} />
        </TouchableOpacity>
      );
    });
  }

  render() {
    const {type, page} = this.props;
    return (
      <View>
        {type === 'wonder' ? (
          <View style={style.wonder}>
            <Image
              style={style.wonderImage}
              source={{
                uri: 'https://www.digikala.com/static/files/c72cc7fc.png',
              }}
            />
            <CountDown
              size={15}
              until={10000}
              onFinish={() => alert('Finished')}
              digitStyle={{backgroundColor: '#757575', borderRadius: 3}}
              digitTxtStyle={{color: '#fff'}}
              timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
              separatorStyle={{color: '#757575'}}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{m: null, s: null}}
              showSeparator
            />
          </View>
        ) : (
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              paddingTop: 20,
            }}>
            <Text style={{fontFamily: 'IRANSansMobile', color: '#444d56'}}>
              {type}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                this.props.navigation.navigate('more', {
                  title: type,
                  page: page,
                });
              }}>
              <Text style={{fontFamily: 'IRANSansMobile', color: '#2b97ff'}}>
                لیست کامل
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.renderItems()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {digitalTools, name} = state.auth;
  return {
    digitalTools,
    name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: navigation => dispatch(getProducts(navigation)),
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ProductScrollView),
);

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
};

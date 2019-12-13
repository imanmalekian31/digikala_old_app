import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {addToCart, addToFavorite, deleteFavorite} from '../../../actions';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: this.props.favorite,
    };
  }

  static propTypes = {
    repeat: PropTypes.number,
  };

  static defaultProps = {
    repeat: 1,
  };

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  render() {
    const {
      description,
      EN_description,
      color,
      cost,
      product,
      favorite,
    } = this.props;
    // this.setState({favorite: favorite});
    return (
      <View style={style.wrapper}>
        {Array.from({length: this.props.repeat}).map((v, i) => (
          <View key={i}>
            <View style={style.headerDescription}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginBottom: 5,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    this.state.favorite === false
                      ? this.props.addToFavorite(product)
                      : this.props.deleteFavorite(product);
                    // this.changeStatus();
                    this.state.favorite === false
                      ? this.setState({favorite: true})
                      : this.setState({favorite: false});
                  }}>
                  {this.state.favorite === true ? (
                    <Icon
                      name="heart"
                      type="MaterialCommunityIcons"
                      style={{color: 'red', fontSize: 25}}
                    />
                  ) : (
                    <Icon
                      name="heart"
                      type="MaterialCommunityIcons"
                      style={{color: '#a7a7a7', fontSize: 25}}
                    />
                  )}
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                  <Icon
                    name="bell"
                    type="MaterialCommunityIcons"
                    style={{
                      marginLeft: 20,
                      marginRight: 20,
                      color: '#a7a7a7',
                      fontSize: 25,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => this.props.navigation.navigate('profile')}>
                  <Icon
                    name="share-variant"
                    type="MaterialCommunityIcons"
                    style={{color: '#a7a7a7', fontSize: 25}}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.descriptionTitleFA}>{description}</Text>
              <Text style={style.descriptionTitleEN}>{EN_description}</Text>
            </View>
            <View style={style.detailBody}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <TouchableOpacity activeOpacity={0.8} style={style.ButtonView}>
                  <Icon
                    name="clipboard-outline"
                    type="MaterialCommunityIcons"
                    style={{color: '#a4a9c6', fontSize: 20}}
                  />
                  <Text style={{fontFamily: 'IRANSansMobile', marginLeft: 10}}>
                    مشخصات
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={style.ButtonView}>
                  <Icon
                    name="forum"
                    type="MaterialCommunityIcons"
                    style={{color: '#a4a9c6', fontSize: 20}}
                  />
                  <Text style={{fontFamily: 'IRANSansMobile', marginLeft: 10}}>
                    نظرات کاربران
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 410,
                  backgroundColor: '#fff',
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontFamily: 'IRANSansMobile'}}>رنگ</Text>
                  <Text
                    style={{
                      fontFamily: 'IRANSansMobile',
                      color: '#a7a7a7',
                    }}>
                    {color.length} رنگ{' '}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {color.map(item => {
                    return (
                      <View
                        style={{
                          borderWidth: 1,
                          padding: 5,
                          paddingLeft: 15,
                          paddingRight: 15,
                          borderColor: '#a7a7a7',
                          borderRadius: 4,
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: 10,
                        }}>
                        <View
                          style={{
                            borderWidth: 0.5,
                            height: 15,
                            width: 15,
                            borderRadius: 10,
                            backgroundColor: item,
                          }}
                        />
                        <Text style={{fontFamily: 'IRANSansMobile'}}>
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </View>

                <View style={style.guarantee}>
                  <Icon
                    name="shield"
                    type="MaterialCommunityIcons"
                    style={{fontSize: 25, color: '#757575', marginRight: 10}}
                  />
                  <Text
                    style={{fontFamily: 'IRANSansMobile', color: '#929292'}}>
                    گارانتی اصالت و سلامت فیزیکی کالا{' '}
                  </Text>
                </View>
                <View>
                  <View style={style.shop}>
                    <Icon
                      name="store"
                      type="MaterialCommunityIcons"
                      style={{fontSize: 30, color: '#757575', marginRight: 10}}
                    />
                    <Text
                      style={{fontFamily: 'IRANSansMobile', color: '#929292'}}>
                      فروش توسط سنتر مال | رضایت خرید
                    </Text>
                  </View>
                  <View style={style.readySend}>
                    <Icon
                      name="truck"
                      type="MaterialCommunityIcons"
                      style={{fontSize: 30, color: '#757575', marginRight: 10}}
                    />
                    <Text
                      style={{fontFamily: 'IRANSansMobile', color: '#929292'}}>
                      آماده ارسال از انبار دیجی کالا از
                    </Text>
                  </View>
                </View>
                <View style={{padding: 10}}>
                  <Text style={style.costText}>
                    {this.formatNumber(cost)} تومان
                  </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    style={style.btnAdd}
                    activeOpacity={0.8}
                    onPress={() => {
                      this.props.addToCart(product);
                      this.props.navigation.navigate('cart');
                    }}>
                    <Icon
                      name="cart-plus"
                      type="MaterialCommunityIcons"
                      style={{fontSize: 30, color: '#fff', marginRight: 10}}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: 'IRANSansMobile',
                        color: '#fff',
                      }}>
                      افزودن به سبد خرید
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addToCart(product)),
    addToFavorite: product => dispatch(addToFavorite(product)),
    deleteFavorite: product => dispatch(deleteFavorite(product)),
  };
};

export default withNavigation(
  connect(
    null,
    mapDispatchToProps,
  )(Welcome),
);

const style = {
  wrapper: {
    flex: 1,
    zIndex: 10,
    position: 'relative',
    backgroundColor: '#eee',
  },
  headerDescription: {
    width: '100%',
    padding: 10,
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    borderBottomWidth: 2,
    backgroundColor: '#fbfbfb',
    borderTopWidth: 0.5,
    borderColor: '#e9e9e9',
  },
  descriptionTitleFA: {
    fontFamily: 'IRANSansMobile',
    color: '#000',
  },
  descriptionTitleEN: {
    fontFamily: 'IRANSansMobile',
    textAlign: 'left',
    color: '#a7a7a7',
  },
  ButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    width: '48%',
    padding: 8,
  },
  detailBody: {
    justifyItems: 'center',
    backgroundColor: '#eeeeee',
    padding: 20,
    paddingTop: 10,
  },
  btnAdd: {
    width: '90%',
    backgroundColor: '#66bb6a',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
  },
  costText: {
    fontFamily: 'IRANSansNumber',
    fontSize: 25,
    color: '#66bb6a',
    textAlign: 'right',
  },
  readySend: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    padding: 5,
  },
  shop: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 0,
  },
  guarantee: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 0.3,
    padding: 10,
  },
};

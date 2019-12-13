import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CartSellFormatApp from '../assets/components/CartSellFormatApp';
import CartSellFormatList from '../assets/components/CartSellFormatList';

class CompleteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      case: 1,
    };
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' تومان ';
  }

  renderFormatApp() {
    const key = this.props.navigation.getParam('page', 0);
    return this.props.digitalTools[key].map((item, index) => {
      return (
        <TouchableOpacity
          style={{width: '50%'}}
          key={index}
          activeOpacity={0.9}
          onPress={() =>
            this.props.navigation.navigate('productDetails', {
              product: item,
            })
          }>
          <CartSellFormatApp {...item} />
        </TouchableOpacity>
      );
    });
  }

  renderFormatList() {
    const key = this.props.navigation.getParam('page', 0);
    return this.props.digitalTools[key].map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          onPress={() =>
            this.props.navigation.navigate('productDetails', {
              product: item,
            })
          }>
          <CartSellFormatList {...item} />
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={{backgroundColor: '#ddd'}}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: '#fff',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            borderBottomWidth: 0.3,
          }}>
          <View
            style={{
              flex: 2,
              height: '100%',
              borderLeftWidth: 0.5,
              borderColor: '#908B8D',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                const icon = this.state.case;
                icon === 1
                  ? this.setState({case: 2})
                  : this.setState({case: 1});
              }}>
              {this.state.case === 1 ? (
                <Icon name="format-list-bulleted" size={30} color="#757575" />
              ) : (
                <Icon name="apps" size={30} color="#757575" />
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 6,
              height: '100%',
              borderLeftWidth: 0.5,
              borderColor: '#908b8d',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="sort-variant" size={30} color="#757575" />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 3,
              }}>
              <Text style={{fontFamily: 'IRANSansMobile'}}>مرتب سازی</Text>
              <Text
                style={{
                  fontFamily: 'IRANSansMobile',
                  fontSize: 8,
                  color: 'gray',
                }}>
                پرفروش ترین
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 6,
              height: '100%',
              borderColor: '#908b8d',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="filter-variant" size={30} color="#757575" />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 3,
              }}>
              <Text style={{fontFamily: 'IRANSansMobile'}}>فیلتر کردن</Text>
              <Text
                style={{
                  fontFamily: 'IRANSansMobile',
                  fontSize: 8,
                  color: 'gray',
                }}>
                رنگُ،نوع،قیمت‌و...
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              flexWrap: 'wrap',
              marginBottom: 60,
            }}>
            {this.state.case === 1
              ? this.renderFormatApp()
              : this.renderFormatList()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {digitalTools} = state.auth;
  return {
    digitalTools,
  };
};
export default connect(
  mapStateToProps,
  null,
)(CompleteList);

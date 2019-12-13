import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import FavoriteCart from '../assets/components/FavoriteCart';

class FavoriteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCart() {
    return this.props.favorite.map((item, index) => {
      return <FavoriteCart key={index} product={item} {...item} />;
    });
  }

  render() {
    return (
      <View style={style.body}>
        <ScrollView contentContainerStyle={{padding: 10}}>
          {this.renderCart()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {favorite} = state.auth;
  return {
    favorite,
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    null,
  )(FavoriteScreen),
);

const style = {
  body: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  totalCost: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    padding: 10,
  },
};

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('favorite');
          }}
          activeOpacity={0.8}>
          <View
            style={{
              width: '100%',
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <Icon name="heart" size={30} color="gray" />
            <Text
              style={{
                fontFamily: 'IRANSansMobile',
                color: 'gray',
                marginLeft: 15,
              }}>
              لیست مورد علاقه
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = {
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

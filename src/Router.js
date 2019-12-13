import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation';

//screens
import Home from './screens/Home';
import StartScreen from './screens/StartScreen';
import SideBar from './assets/components/SideBar';
import Header from './assets/components/NavHeader';
import Profile from './screens/Profile';
import CategoryList from './screens/CategoryList';
import ProductList from './screens/ProductList';
import ErrorConnection from './screens/ErrorConnection';
import WebScreen from './screens/WebScreen';
import Product from './assets/components/ProuductDetails/index';
import CartScreen from './screens/CartScreen';
import CompleteList from './screens/CompleteList';
import FavoriteScreen from './screens/FavoriteScreen';

const {height, width} = Dimensions.get('window');

export default class Router extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#eeeeee'}}>
        <NavigationApp />
      </View>
    );
  }
}

const Navigator = createSwitchNavigator({
  start: StartScreen,
  errorConnection: ErrorConnection,
  main: {
    screen: createDrawerNavigator(
      {
        mainStack: createStackNavigator({
          home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.toggleDrawer()}
                  rightIcon="menu"
                  screen="Home"
                />
              ),
            }),
          },
          profile: {
            screen: Profile,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="Profile"
                  title="پروفایل"
                />
              ),
            }),
          },
          category: {
            screen: CategoryList,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="category"
                  title="دسته بندی محصولات"
                />
              ),
            }),
          },
          productList: {
            screen: ProductList,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="category"
                  title="لیست محصولات"
                />
              ),
            }),
          },
          web: {
            screen: WebScreen,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="category"
                  title=""
                />
              ),
            }),
          },
          productDetails: {
            screen: Product,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="productDetails"
                  title=""
                />
              ),
            }),
          },
          cart: {
            screen: CartScreen,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="cart"
                  title="سبد خرید شما"
                />
              ),
            }),
          },
          more: {
            screen: CompleteList,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="cart"
                  title={navigation.getParam('title', '')}
                />
              ),
            }),
          },
          favorite: {
            screen: FavoriteScreen,
            navigationOptions: ({navigation}) => ({
              header: (
                <Header
                  onPress={() => navigation.goBack()}
                  rightIcon="arrow-right"
                  screen="favorite"
                  title="لیست مورد علاقه"
                />
              ),
            }),
          },
        }),
      },
      {
        contentComponent: SideBar,
        drawerPosition: 'right',
        drawerWidth: width - 50,
      },
    ),
    navigationOptions: {header: null},
  },
});

const NavigationApp = createAppContainer(Navigator);

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';

import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';

export default class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: [
        'شستوشو و نظافت',
        'صوتی و تصویری',
        'آشپزخانه',
        'سرو و پذیرایی',
        'حیوانات خانگی',
        'لوازم خانگی برقی',
        'دکوراتیو',
        'ساعت',
        'خواب و حمام',
        'اکسسوری لوازم شخصی',
        'ابزار غیر برقی',
        'باغبانی',
        'ابزار برقی',
        'نور و روشنایی',
        'فرش',
      ],
      digitalTools: [
        'موبایل',
        'تبلت و کتابخوان',
        'لپ تاپ',
        'دوربین',
        'کامپیوتر و تجهیزات جانبی',
        'ماشین های اداری',
        'لوازم جانبی کالای دیجیتال',
        'کارت هدیه دیجی کالا',
        'کنسول بازی',
      ],
      health: [
        'لوازم آرایشی',
        'لوازم بهداشتی',
        'لوازم شخصی برقی',
        'عطر',
        'ابزار سلامت',
      ],
      car: [
        'خودرو',
        'لوازم جانبی خودرو',
        'موتور سیکلت',
        'لوازم جانبی موتور سیکلت',
        'لوازم مصرفی موتور سیکلت',
        'انبارداری و صنعت',
        'ماشین های اداری',
        'باغبانی',
        'ابزار برقی',
        'ابزار غیر برقی',
        'دکوراسیون اداری',
      ],
      dress: ['مردانه', 'زنانه', 'بچگانه', 'زنانه و مردانه'],
      art: [
        'کتاب و مجلات',
        'لوازم التحریر',
        'صنایع دستی',
        'فرش',
        'آلات موسیقی',
        'موسیقی',
        'موسیقی',
        'فیلم',
        'نرم افزار و بازی',
        'محتوای آموزشی',
        'کتاب و نشریات دیجیتال',
        'محصولات مذهبی',
        'مترجم',
      ],
      kid: [
        'ایمنی و مراقبت',
        'غذا خوری',
        'لوازم شخصی',
        'بهداشت و حمام',
        'گردش و سفر',
        'سرگرمی و آموزشی',
        'خواب کودک',
        'شوینده لباس کودک و نوزاد',
      ],
      trip: [
        'پوشاک ورزشی',
        'لوازم ورزشی',
        'دوچرخه و لوازم جانبی',
        'تجهیزات سفر',
      ],
      eat: [
        'کالاهای اساسی و خوار و بار',
        'لبنیات',
        'مواد پروتئینی',
        'صبحانه',
        'نوشیدنی',
        'کنسرو و غذای آماده',
        'خشکبار و شیرینی',
        'تنقلات',
        'میوه و سبزیجات',
      ],
    };
  }

  renderItems(category) {
    return category.map(item => {
      return (
        <TouchableWithoutFeedback
          onPress={() => this.props.navigation.navigate('productList')}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item}</Text>
          </View>
        </TouchableWithoutFeedback>
      );
    });
  }

  render() {
    const {navigation} = this.props;
    const pageIndex = navigation.getParam('page', 0);
    console.log(pageIndex);
    return (
      <ScrollableTabView
        style={{backgroundColor: '#ef394f'}}
        initialPage={8 - pageIndex}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarActiveTextColor="#fff"
        tabBarInactiveTextColor="#EFEDEB"
        tabBarUnderlineStyle={{backgroundColor: '#fff', height: 2}}
        tabBarTextStyle={{fontFamily: 'IRANSansMobile'}}
        textStyle={{fontFamily: 'IRANSansMobile'}}>
        <ScrollView tabLabel="خوردنی و آشامیدنی" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.eat)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="ورزش و سفر" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.trip)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="اسباب بازی، کودک و نوزاد" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.kid)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="کتاب، لوازم تحریر و هنر" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.art)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="خانه و آشپزخانه" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.home)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="مد و پوشاک" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.dress)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="خودرو،ابزار و اداری" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.car)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="آرایشی، بهداشتی و سلامت" style={styles.tabView}>
          <ScrollView>{this.renderItems(this.state.health)}</ScrollView>
        </ScrollView>
        <ScrollView tabLabel="کالای دیجیتال" style={styles.tabView}>
          {this.renderItems(this.state.digitalTools)}
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    height: 1000,
    width: '100%',
    backgroundColor: '#fff',
    fontFamily: 'IRANSansMobile',
  },
  card: {
    width: '100%',
    height: 70,
    borderBottomWidth: 0.2,
    borderColor: '#757575',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'IRANSansMobile',
    color: '#757575',
    marginLeft: 10,
    fontSize: 16,
  },
});

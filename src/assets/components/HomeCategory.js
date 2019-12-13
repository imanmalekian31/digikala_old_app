import React from 'react';
import {View, ScrollView, TouchableWithoutFeedback, Text} from 'react-native';
import {withNavigation} from 'react-navigation';


class HomeCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryNames: [
                'کالای دیجیتال',
                'آرایشی، بهداشتی و سلامت',
                'خودرو،ابزار و اداری',
                'مد و پوشاک',
                'خانه و آشپزخانه',
                'کتاب، لوازم تحریر و هنر',
                'اسباب بازی، کودک و نوزاد',
                'ورزش و سفر',
                'خوردنی و آشامیدنی',
            ],
        };
    }

    renderItems() {
        const {navigation} = this.props;
        return this.state.categoryNames.map((name, index) => {
            return (
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate('category', {
                        page: index,
                    });
                }} key={index}>
                    <Text key={index} style={style.categoryStyle}>{name}</Text>
                </TouchableWithoutFeedback>
            );
        });
    }

    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {this.renderItems()}
            </ScrollView>
        );
    }
}

export default withNavigation(HomeCategory);


const style = {
    categoryStyle: {
        backgroundColor: '#66bb6a',
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'IRANSansMobile',
    },
};

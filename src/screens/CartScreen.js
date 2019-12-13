import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {getProducts} from '../actions';
import CartSell from '../assets/components/CartSell';

class CartScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalCost: 0,
        };
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + ' تومان ';
    }

    componentDidMount() {
        let x = 0;
        for (let i = 0; i < this.props.cart.length; i++) {
            x += this.props.cart[i].cost;
        }
        this.setState({totalCost: x});
    }


    renderCart() {
        return this.props.cart.map((item, index) => {
            return (
                <CartSell key={index} num={index} {...item} />
            );
        });
    }

    render() {
        return (
            <View style={style.body}>
                <View style={style.totalCost}>
                    <Text style={{fontFamily: 'IRANSansMobile', color: '#66bb6a'}}>جمع کل خرید</Text>
                    <Text style={{
                        fontFamily: 'IRANSansNumber',
                        color: '#66bb6a',
                        fontSize: 20,
                    }}>{this.formatNumber(this.props.totalCost)}</Text>
                </View>
                <ScrollView contentContainerStyle={{padding: 10}}>
                    {this.renderCart()}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {cart, totalCost} = state.auth;
    console.log(state.auth.cart);
    return {
        cart,
        totalCost,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (navigation) => dispatch(getProducts(navigation)),
    };
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(CartScreen));

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
        borderBottomWidth: 0.3,
        padding: 10,
        borderColor : 'gray'
    },
};

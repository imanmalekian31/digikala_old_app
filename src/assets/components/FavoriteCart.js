import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {deleteFavorite} from '../../actions';

class FavoriteCart extends React.Component {
    render() {
        const {product, image, description, EN_description} = this.props;
        return (
            <View style={style.cardBody}>
                <View style={style.imageBody}>
                    <View style={{flex: 1, width: '100%'}}>
                        <Image
                            style={style.image}
                            source={{uri: image[0]}}/>
                    </View>
                </View>
                <View style={style.details}>
                    <View style={style.textBody}>
                        <Text style={style.textDis}>{description}</Text>
                        <Text style={[style.textDis, {color: 'gray'}]}>{EN_description}</Text>
                    </View>
                    <View style={style.costBody}>
                        <TouchableWithoutFeedback onPress={() => {
                            this.props.deleteFavorite(product);
                        }}>
                            <Text style={{
                                fontFamily: 'IRANSansMobile',
                                textAlign: 'right',
                                fontSize: 12,
                                color: 'red',
                            }}>حذف</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteFavorite: (product) => dispatch(deleteFavorite(product)),
    };
};
export default withNavigation(connect(null, mapDispatchToProps)(FavoriteCart));

const style = {
    cardBody: {
        width: '100%',
        height: 150,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 0.1,
        marginTop: 5,
        marginLeft: 5,
    },
    imageBody: {
        height: 150,
        width: '30%',
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
    details: {
        flexDirection: 'column',
        height: 150,
        width: '70%',
    },
    textBody: {
        flexDirection: 'column',
        padding: 5,
        width: '100%',
        height: 100,
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
        height: 50,
        width: '100%',
        justifyContent: 'center',
    },
};


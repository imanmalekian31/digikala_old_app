export const getProducts = (navigation) => {
    return {type: 'SET_PRODUCTS'};
};

export const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload,
    };
};
export const deleteCart = (payload) => {
    return {
        type: 'DELETE_CART',
        payload,
    };
};

export const addToFavorite = (payload) => {
    return {
        type: 'ADD_TO_FAVORITE',
        payload,
    };
};

export const deleteFavorite = (payload) => {
    return {
        type: 'DELETE_FROM_FAVORITE',
        payload,
    };
};


export const setProducts = (navigation) => {

    // return (dispatch) => {
    //     fetch('http://rns-assistant.aut.ac.ir/data.json')
    //         .then((response) => response.json())
    //         .then(async (responseJson) => {
    //             await dispatch(setProducts(setProducts(responseJson.products[0]['digitalTools'])));
    //             navigation.navigate({routeName: 'main', key: 'main'});
    //         })
    //         .catch((error) => {
    //             navigation.navigate({routeName: 'errorConnection', key: 'errorConnection'});
    //         });
    // };
    // fetch('http://rns-assistant.aut.ac.ir/data.json')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         dispatch(setProducts(setProducts(responseJson.products[0]['digitalTools'])));
    //         navigation.navigate({routeName: 'main', key: 'main'});
    //     }).catch(
    //     navigation.navigate({routeName: 'errorConnection', key: 'errorConnection'}),
    // );
};


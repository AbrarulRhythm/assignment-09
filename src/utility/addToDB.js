const getWishList = () => {

    const storedProduct = localStorage.getItem('toys');

    if (storedProduct) {
        const storedProductData = JSON.parse(storedProduct);
        return storedProductData;
    }
    else {
        return [];
    }
}

const addToWishList = (id) => {

    const storedProductData = getWishList();

    if (!storedProductData.includes(id)) {
        storedProductData.push(id);
        const data = JSON.stringify(storedProductData);
        localStorage.setItem('toys', data);
    }
}

const removeWishList = (id) => {

    const storedData = getWishList();
    const filteredStoredData = storedData.filter(toyId => parseInt(toyId) !== parseInt(id));
    const data = JSON.stringify(filteredStoredData);
    localStorage.setItem('toys', data);
}

export { getWishList, addToWishList, removeWishList };
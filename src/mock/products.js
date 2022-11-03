export const products = [
    {
        id: 1,
        descuento: 5,
        title: 'Teclados',
        price: 13000,
        stock: 15,
        category: 'Teclados',
        img: 'https://res.cloudinary.com/dvkx8q886/image/upload/v1667499001/Redragon-Kumara-K552-RGB-Backlit-LED-Mechanical-Gaming-Keyboard-60-Compact-87-Key-Blue-Switches-For.jpg_Q90.jpg__s5lsx0.jpg',
    },
    {
        id: 2,
        descuento: 10,
        title: 'Placa De Video RTX 3060',
        price: 159999,
        stock: 5,
        category: 'PlacasVideo',
        img: 'https://res.cloudinary.com/dvkx8q886/image/upload/v1667498818/715UuCH5OES_pzfu45.jpg',
    },
    {
        id: 3,
        descuento: 9,
        title: 'PC Armada(Gaming)',
        price: 152879,
        stock: 7,
        category: 'PCArmadas',
        img: 'https://res.cloudinary.com/dvkx8q886/image/upload/v1667507799/banner4_l0eecy.jpg',
    },
];

export const getProducts = (categoryName) => {
    return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
            (prod) => prod.category === categoryName
        );
        const ref = categoryName ? prodFiltrados : products;
        setTimeout(() => {
            res(ref);
        }, 500);
    });
};

export const getProduct = (idProd) => {
    return new Promise((res, rej) => {
        const product = products.find((prod) => prod.id === +idProd);
        setTimeout(() => {
            res(product);
        }, 2000);
    });
};
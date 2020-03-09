const intialState = {
    products: [
        {
            _id: "5cfe10a79c129e002c56bff0",
            name: "Moto E6s",
            productPrice: 5000,
            category: "Mobile",
            image: "/images/onePlusPhone.jpeg"
        },
        {
            _id: "5cfe15de9c129e002c56bff3",
            name: "Realme 5",
            productPrice: 9000,
            category: "Mobile",
            image: "/images/redmiPhone.jpeg"
        },
        {
            _id: "5cfe19659c129e002c56bff6",
            name: "Asus VivoBook S Series",
            productPrice: 46990,
            category: "Laptop",
            image: "/images/acerLap.jpeg"
        },
        {
            _id: "5cfe1b179c129e002c56bff9",
            name: "HP 14q Core i3 7th Gen",
            productPrice: 26000,
            category: "Laptop",
            image: "/images/acerLap.jpeg"
        },
        {
            _id: "5cfe1d529c129e002c56bffc",
            name: "HP Pavilion x360 Core i3 8th Gen",
            productPrice: 36000,
            category: "Mobile",
            image: "/images/redmiPhone.jpeg"
        },
        {
            _id: "5cfe1eec9c129e002c56bfff",
            name: "Moto E6s",
            productPrice: 5000,
            category: "Mobile",
            image: "/images/redmiPhone.jpeg"
        },
        {
            _id: "5cfe20d09c129e002c56c001",
            name: "Moto E6s",
            productPrice: 5000,
            category: "Laptop",
            image: "/images/acerLap.jpeg"
        },
        {
            _id: "5cfe20d09c129e002c56ds201",
            name: "Dell Icon 3s",
            productPrice: 12000,
            category: "Laptop",
            image: "/images/lenovoLap.jpeg"
        }
    ]
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default reducer;
// let infoOne: string = "Hello";
// let infoTwo: number = 5;
// let infoThree: boolean = true;



// let infoFour: Array<number | string> = ["Hello", "Mello", "Tello", 5];
// let infoFour: (number | string)[] = ["Hello", "Mello", "Tello", 5];

// type productType = {
//     title: string,
//     price: number,
//     stock: boolean
// }

// const product: productType[] = [
//     {
//         title: "Apple",
//         price: 2,
//         stock: true
//     },
//     {
//         title: "Apple",
//         price: 2,
//         stock: true
//     }
// ]

type RatingType = {
    rate: number;
    count: number;
};

type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: "men's clothing" | "women's clothing" | "jewelery" | "electronics";
    image: string;
    rating: RatingType;
};

const fetchApi = (): void => {
    fetch('https://fakestoreapi.com/products').
        then(res => res.json()).
        then((data) => {
            data.map((item: ProductType) => {
                console.log(item.title);

            })
        })
}

const a = 5;
console.log(void(a));



fetchApi()



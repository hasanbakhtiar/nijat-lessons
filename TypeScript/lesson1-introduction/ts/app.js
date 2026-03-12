// let infoOne: string = "Hello";
// let infoTwo: number = 5;
// let infoThree: boolean = true;
var fetchApi = function () {
    fetch('https://fakestoreapi.com/products').
        then(function (res) { return res.json(); }).
        then(function (data) {
        data.map(function (item) {
            console.log(item.title);
        });
    });
};
var a = 5;
console.log(void (a));
fetchApi();

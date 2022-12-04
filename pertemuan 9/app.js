// import FruitController
// Melakukan destructing object

const {index, strore} = require("./FruitController.js");

const main = () => {
    index();
    store("Melon");
};

main();
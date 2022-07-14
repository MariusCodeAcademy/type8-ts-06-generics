/* eslint-disable arrow-body-style */
const product1 = {
  title: 'Nike sport shoes',
  price: 100,
  forSale: false,
  town: 'London',
  street: 'Backer st',
};
interface WearHouseI {
  department: string;
  ceo: string;
  town: string;
  street: string;
}
interface WearHouseIAddress extends WearHouseI {
  postalAddress: string;
}

const warehouse1: WearHouseI = {
  department: 'Executive',
  ceo: 'James Bond',
  town: 'Vilnius',
  street: 'Vokieciu st',
};
//                        Tipas turi tureti tokias savybes
const addPostalAddress = <Type extends { town: string; street: string }>(obj: Type) => {
  return {
    ...obj,
    postalAddress: `${obj.town}, ${obj.street}`,
  };
};

const rez111 = addPostalAddress(warehouse1);
const rez112 = addPostalAddress(product1);
// const rez113 = addPostalAddress({ name: 'aha' });
console.log('rez111 ===', rez111);
console.log('rez112 ===', rez112);
// postalAddress = town street
// add types or interfaces su product1 and warehouse1
// create funcion addPostalAddress =>  postalAddress: 'Vilnius, Vokieciu st'

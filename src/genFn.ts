/* eslint-disable arrow-body-style */
type Product = {
  title: string;
  price: number;
  forSale: boolean;
  town: string;
  street: string;
};
const product1: Product = {
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
type TownAndStreet = { town: string; street: string };

//                        Tipas turi tureti tokias savybes
const addPostalAddress = <Type extends { town: string; street: string }>(obj: Type) => {
  return {
    ...obj,
    postalAddress: `${obj.town}, ${obj.street}`,
  };
};

const rez111 = addPostalAddress<WearHouseI>(warehouse1);
const rez112 = addPostalAddress<Product>(product1);
// const rez113 = addPostalAddress({ name: 'aha' });
console.log('rez111 ===', rez111);
console.log('rez112 ===', rez112);
// postalAddress = town street
// add types or interfaces su product1 and warehouse1
// create funcion addPostalAddress =>  postalAddress: 'Vilnius, Vokieciu st'

const addId = (arg: number): [number, number] => [Math.random(), arg];

const id1 = addId(15);
const id2 = addId('Serbentautas');
console.log('id1 ===', id1);
// pataisyti addId kad ji veiktu su generic argumentu

interface SimpleUser {
  id: string;
  name: string;
  town: string;
  hasDog: boolean;
}
const usersT: SimpleUser[] = [
  {
    id: 'u_1',
    name: 'John',
    town: 'London',
    hasDog: false,
  },
  {
    id: 'u_2',
    name: 'Jill',
    town: 'Kaunas',
    hasDog: true,
  },
  {
    id: 'u_3',
    name: 'Serbentautas',
    town: 'Klaipeda',
    hasDog: true,
  },
];
// 4 grazina masyva kuriame yra masyvas, kurio pirmas elemnetas yra id, o antrras ar turi suni. Tipai pagal usersT
// [
//   ['u_1', false],
//   ['u_2', true],
//   ['u_3', true],
// ];

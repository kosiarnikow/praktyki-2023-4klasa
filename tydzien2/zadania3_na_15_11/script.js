const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];
 
// 1. .concat() - łączenie tablic

const odwrocenieLaczenie = (arr1, arr2) => arr1.concat(arr2);
console.log("punkt 1 - " + odwrocenieLaczenie(arr1, arr2));

// 2. .reverse() - oswraca tablice
// ! - metoda działa cały czas

const ostatni = (numbers) => numbers.reverse()[0];
console.log("punkt 2 - " + ostatni(numbers));

// 3. .filter() - stosowanie filtra

const dlugosc = arr2.filter((arr2) => arr2.length > 5);
console.log("punkt 3 - " + dlugosc);

// 4. .reduce() - suma elementów

const suma = numbers.reduce((aktualnie, dodaj) => {
    return aktualnie + dodaj;
});
console.log("punkt 4 - " + suma);

// 5. .map() - dzialanie na każdym elemencie

const dzialanie = numbers.map((number) => {
    return number * number + 3;
  });

console.log("punkt 5 - " + dzialanie);

// dodatkowe 1 

const parzyste = numbers.filter((numbers) => numbers % 2 == 0);
console.log("dodatkowe 1 - " + parzyste);

// dodatkowe 2 
let tablica = [10, 11, "Ania", 11];
let tablica2 = [];

for (let i = 0; i < tablica.length; i++) {
    if (tablica[i] == 11) {
        tablica2.push(tablica[i]);
    }
}

console.log(tablica2);
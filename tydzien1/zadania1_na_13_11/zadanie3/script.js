function drugiNajwiekszy(tablica) {
    // Sprawdź, czy tablica zawiera co najmniej dwa elementy.
    if (tablica.length < 2) {
      return null;
    }
  
    // Jeśli tablica zawiera liczby, sortuj ją malejąco.
    if (Array.isArray(tablica[0]) === false) {
      tablica.sort((a, b) => b - a);
    } else {
      // Jeśli tablica zawiera stringi, posortuj ją według długości.
      tablica.sort((a, b) => b.length - a.length);
    }
  
    // Zwracaj drugi element w tablicy.
    return tablica[1];
  }
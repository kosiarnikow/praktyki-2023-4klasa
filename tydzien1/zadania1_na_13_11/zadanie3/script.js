function second() {
    let napis = document.getElementById("wartosci").value;
    let wynik = document.getElementById("wynik");
    let element = napis.split(",");
    tablica = [];
  
    // Bubble sort dla liczb
    for (let i = 0; i < element.length - 1; i++) {
      for (let j = 0; j < element.length - i - 1; j++) {
        if (+element[j] < +element[j + 1]) {
          [element[j], element[j + 1]] = [element[j + 1], element[j]];
        }
      }
    }
  
    let drugaNajwieksza = +element[1];
  
    // Bubble sort dla stringów
    for (let i = 0; i < element.length - 1; i++) {
      for (let j = 0; j < element.length - i - 1; j++) {
        if (element[j].length < element[j + 1].length) {
          [element[j], element[j + 1]] = [element[j + 1], element[j]];
        }
      }
    }
  
    let drugaNajdluzsza = element[1];
  
    if (typeof drugaNajwieksza === 'number') {
      wynik.innerHTML = drugaNajwieksza + " - chodzi o liczbe";
    } else {
      wynik.innerHTML = drugaNajdluzsza + " - chodzi o slowo";
    }
  }
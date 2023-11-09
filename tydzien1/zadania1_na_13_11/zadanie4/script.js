function czyAnagram() {
    // Pobierz wartości z pól formularza.
    const slowo1 = document.getElementById("slowo1").value;
    const slowo2 = document.getElementById("slowo2").value;
  
    // Zweryfikuj, czy słowa mają taką samą długość.
    if (slowo1.length !== slowo2.length) {
      document.getElementById("wynik").textContent = "False";
      return;
    }
  
    // Posortuj oba słowa.
    slowo1 = slowo1.split("").sort().join("");
    slowo2 = slowo2.split("").sort().join("");
  
    // Sprawdź, czy posortowane słowa są takie same.
    if (slowo1 === slowo2) {
      document.getElementById("wynik").textContent = "True";
    } else {
      document.getElementById("wynik").textContent = "False";
    }
  }
function calculate() {
    const liczba1 = parseFloat(document.getElementById("liczba1").value);
    const liczba2 = parseFloat(document.getElementById("liczba2").value);
    const operacja = document.getElementById("operacja").value;
    let wynik;

    switch (operacja) {
        case "dodaj":
            wynik = liczba1 + liczba2;
            break;
        case "odejmij":
            wynik = liczba1 - liczba2;
            break;
        case "pomnoz":
            wynik = liczba1 * liczba2;
            break;
        case "podziel":
            if (liczba2 == 0) {
                wynik = "nie wolno dzielić przez zero XD";
            } else {
                wynik = liczba1 / liczba2;
            }
            break;
    }

    document.getElementById("wynik").textContent = wynik;
}

// koniec

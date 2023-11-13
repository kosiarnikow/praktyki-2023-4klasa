function palindrome() { 
    let wynik = document.getElementById("wynik");
    let text = document.getElementById("text").value;
    let sort = "";

    for (let x = text.length - 1; x >= 0; x--) {
      sort += text[x];
    }
  
    if (text == sort) {
        wynik.innerHTML = "Podane słowo jest palindromem";
    } else {
        wynik.innerHTML = "Podane słowo nie jest palindromem";
    }
}

function palindrome() {

	const text = document.getElementById("text").value.trim().toLowerCase();
	let wynik = document.getElementById("wynik");

	if (text.split("").reverse().join("") == text) {
		wynik.innerHTML = "podany wynik jest palindromem";
	} else {
		wynik.innerHTML = "podany wynik nie jest palindromem";
	}
}

// if ma za zadanie podzielić znaki, odwrócić je, a potem je znowu połączyć
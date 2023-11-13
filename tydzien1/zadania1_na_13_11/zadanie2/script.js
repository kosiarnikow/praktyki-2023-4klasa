function palindrome() {
	let text = document.getElementById("text").value;
	let wynik = document.getElementById("wynik");
  
	let isPalindrome = true;
  
	for (let i = 0; i < text.length / 2; i++) {
	  if (text[i] !== text[text.length - 1 - i]) {
		isPalindrome = false;
	  }
	}
  
	if (isPalindrome) {
	  wynik.innerHTML = "Podane słowo jest palindromem";
	} else {
	  wynik.innerHTML = "Podane słowo nie jest palindromem";
	}
  }
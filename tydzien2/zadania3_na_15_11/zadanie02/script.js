var json1;
var wartosc = 0;

function maleje() {
  wartosc--;
  document.getElementById("wynik").innerHTML = wartosc+1;
  document.getElementById("wynik3").innerHTML = json1[wartosc].body;
  document.getElementById("wynik2").innerHTML = json1[wartosc].title;
}

function zwieksza() {
  wartosc++;
  document.getElementById("wynik").innerHTML = wartosc+1;
  document.getElementById("wynik3").innerHTML = json1[wartosc].body;
  document.getElementById("wynik2").innerHTML = json1[wartosc].title;
}


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => json1 = json)



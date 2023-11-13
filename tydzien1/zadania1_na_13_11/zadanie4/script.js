function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].charCodeAt(0) > arr[j + 1].charCodeAt(0)) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

function sprawdzAnagram() {
  const slowo1 = document.getElementById('slowo1').value;
  const slowo2 = document.getElementById('slowo2').value;
  const wynikElement = document.getElementById('wynik');

  const sortedSlowo1 = bubbleSort(slowo1.split(''));
  const sortedSlowo2 = bubbleSort(slowo2.split(''));

  // porownywanie
  for (let i = 0; i < sortedSlowo1.length; i++) {
    if (sortedSlowo1[i].charCodeAt(0) !== sortedSlowo2[i].charCodeAt(0)) {
      wynikElement.textContent = 'nie jest';
      return;
    }
  }

  wynikElement.textContent = 'jest';
}

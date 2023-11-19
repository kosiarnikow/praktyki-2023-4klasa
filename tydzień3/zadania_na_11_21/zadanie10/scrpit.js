word1 = "lorem";
word2 = "ipsum";

const multiplyAsync = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      return Promise.reject("Argumenty muszą być liczbami!");
    }
    return Promise.resolve(x * y);
};
  
multiplyAsync(10, 20).then((result) => {
    console.log(result);
});

multiplyAsync(word1, word2).then((result) => {
    console.log(result); // error
});
// zadanie 9 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Udało się!");
    }, 5000);
});
  
promise.then((result) => {
    console.log(result);
});

// zadanie 10

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

// zadanie 11

const get = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (response.status == 200) {
    const posts = await response.json();

    for (const post of posts) {
      console.log("Title: ", post.title);
      console.log("Body: ", post.body);
    }
  } else {
    console.error("Błąd odpowiedzi:", response.status);
    return null;
  }
};

get();
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
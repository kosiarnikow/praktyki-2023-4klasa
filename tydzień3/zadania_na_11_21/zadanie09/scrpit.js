const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Udało się!');
    }, 5000);
});
  
promise.then((result) => {
    console.log(result);
});
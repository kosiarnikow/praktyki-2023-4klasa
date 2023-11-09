function ciag(x,y) {
    console.log(x,y);
    
    if (x != y) {
        ciag(x,y-1);
    }
}

ciag(8, 11);


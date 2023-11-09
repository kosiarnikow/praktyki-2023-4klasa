let n;

function ciag(n) { 
    if(n < 2) {
        return n;
    }
         
    else if(n == 1){
        return 1;
    }

    else if(n == 0){ 
        return 0;
    }

    else {
        return ciag(n - 1) + ciag(n - 2);
    }
}

for(i = 0; i < 10; i++){
    console.log(ciag(i));
}

console.log(1)
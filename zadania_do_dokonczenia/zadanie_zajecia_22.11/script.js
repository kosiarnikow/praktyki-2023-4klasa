// Do zadania z poprzednich stacjonarnych dodać bootstrap na guzikach. Zastosować currying abu do fetch requestu móc wybrać posts lub todo jako parametr minimum

var parts = new Array();
let value = 0;
var url = 'https://jsonplaceholder.typicode.com/todos'

const todos = () => {
    url = 'https://jsonplaceholder.typicode.com/todos';
    firstFunction();
}

const posts = () => {
    url = 'https://jsonplaceholder.typicode.com/posts';
    firstFunction();
}

const firstFunction = () => {
    fetch(url) 
        .then((response) => response.json())
        .then((json) => assign(json))
}

const assign = (arr) => {
    parts = arr;
    console.log(parts);
} 

const newFunction = (el) => (id) => {
    return document.getElementById(el).innerHTML = parts[id].id;
}

const add = () => {
        value++;
        console.log(parts);
        document.getElementById('ShowTitle').innerHTML = parts[value].title;
        document.getElementById('ShowBody').innerHTML = parts[value].body;
        newFunction('ShowID')(value);
}

const cut = () => {
        value--;
        document.getElementById('ShowTitle').innerHTML = parts[value].title;
        document.getElementById('ShowBody').innerHTML = parts[value].body;
        funPosts('ShowID')(value);
}

firstFunction();
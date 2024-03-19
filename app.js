const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oniput= () => {
    content.innerHTML = "";

    items.filter((item) => 
    item.tolowerCase().includes(inputsearch.value.tolowerCase())
    )
    .forEach((item)=> addHTML(item));
};



function addHTML(item){
    const div = document.createElement("div");
    div.innerHTML = item;
    content.append(div);
}

fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
.then((data) => data.json())
.then((users) => {
    users.forEach((user)=> {
        addHTML (user.name);
        items.push(user.name);
    });
})
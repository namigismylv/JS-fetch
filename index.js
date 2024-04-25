const list = document.getElementById("list")
const artan = document.getElementById("artanBtn")
const azalan = document.getElementById("azalanBtn")
const beginning = document.getElementById("beginning")
const end = document.getElementById("end")
let items = []
fetch("https://fakestoreapi.com/products").then((response) => response.json())
    .then((data) => {
        items = data
        renderUI(items)
    })

function renderUI(cards) {
    list.innerHTML = ""
    for (let i = 0; i < cards.length; i++) {
        const { image, title, price, description } = cards[i]
        list.innerHTML += `
        <div class="col-3 mt-5">
        <div class="card" style="width: 18rem;border:none;">
        <img src="${image}" width=120px> 
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">Price: $${price}</p>
        <p class="card-text1">${description}</p>
        </div>
        </div>
        </div>
        `

    }
}
function sortAscending() {
    items.sort((a, b) => a.price - b.price)
    renderUI(items)
}
function sortDescending() {
    items.sort((a, b) => b.price - a.price)
    renderUI(items)
}

function fromBeginningSort() {
    items.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB){
            return -1
        }
        else if(titleA===titleB){
            return 0;
        }
        else
        {
            return 1
        }
    });
    renderUI(items);
}
function fromEndSort() {
    items.sort((a, b) => {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()
        if(titleA<titleB) {
            return 1
        }
        else if(titleA===titleB){
            return 0
        }
        else{
            return -1
        }

    });
    renderUI(items)
}
artan.addEventListener("click", sortAscending)
azalan.addEventListener("click", sortDescending)
beginning.addEventListener("click", fromBeginningSort)
end.addEventListener("click",fromEndSort)




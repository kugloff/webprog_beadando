const catTableBody = document.getElementById("cat_table_body");

const nameFilter = document.getElementById("name_filter");
const originFilter = document.getElementById("origin_filter");
const filterBtn = document.getElementById("filter_btn");

let url = "http://localhost:3000/cats";

let cats = [];

fetch(url, {method: "GET"})
    .then(res => res.json())
    .then(data => {
        cats = data;
        refreshCats(cats);
    })
    .catch(error => console.log(error));

filterBtn.addEventListener("click", ()=>{
    const name = nameFilter.value.toUpperCase();
    const origin = originFilter.value.toUpperCase();

    if (!name && !origin) {
        refreshCats(cats);
        return;
    }

    let filteredCats = [];

    for(let i = 0; i < cats.length; i++){
        let pushCat = false;

        if (name && !origin &&
            cats[i].name.toUpperCase().includes(name)){
            pushCat = true;
        }
        
        if (!name && origin &&
            cats[i].origin.toUpperCase().includes(origin)) {
            pushCat = true;
        }

        if (name && origin && 
            cats[i].name.toUpperCase().includes(name) && 
            cats[i].origin.toUpperCase().includes(origin)){
            pushCat = true;
        }

        if(pushCat){
            filteredCats.push(cats[i]);
        }

    }
    refreshCats(filteredCats);
})

function refreshCats(kitties){
    catTableBody.innerHTML = "";

    kitties.forEach(cat=>{
        catTableBody.innerHTML +=
        `<tr id="cat_${cat.id}">
            <th>${cat.id}</th>
            <th>${cat.name}</th>
            <th>${cat.origin}</th>
            <th>${cat.length}</th>
            <th><i onclick="deleteCat(${cat.id})" id="delete_cat_btn" class="fa-solid fa-times"></i></th>
        </tr>`;
    })
}

function deleteCat(id){
    const cat = document.getElementById(`cat_${id}`);

    fetch(`${url}/${id}`, {method: "DELETE"})
    .then(res => {
        if(res.ok){
            cats = cats.filter(cat => cat.id !== id);
            cat.remove();
            refreshCats(cats);
        }
    })
    .catch(error => console.log(error));
}
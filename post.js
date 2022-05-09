const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "posts.html"; }

let out = document.querySelector("#blog-post");

fetch(`https://marthebull.no/exam1/wp-json/wp/v2/posts/${id}`, {
	"method": "GET",

})

.then(response => response.json())
.then(myData => {
    console.log(myData[0]);
    listData(myData[0]);
})

.catch(error => out.innerHTML = "Something's wrong!");


function listData(amiibo) {
    console.log(amiibo);
    document.title = amiibo.character; 
    let newDiv = `
        <h1>${title}</h1>
        <img src="${amiibo.image}" alt="${amiibo.character}">
        <p>Name: <strong>${amiibo.name}</strong></p>
        <p>Amiibo Series: ${amiibo.amiiboSeries}</p>
        <p>Game Series: ${amiibo.gameSeries}</p>
        <p>Released (in Japan): ${amiibo.release.jp}
        <p>Type: ${amiibo.type}</p>
        <p><a href="amiibo.html">Back</a></p>
    `;
    out.innerHTML = newDiv;
    status.innerHTML = "";
}

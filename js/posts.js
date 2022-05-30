
fetch("https://marthebull.no/exam1/wp-json/wp/v2/posts?_embed&per_page=6&page=1", {
	"method": "GET"
})

.then(response => response.json())
.then(myData => {
    console.log(myData);
    listData(myData);
})
.catch(error => allPosts.innerHTML = "Something's wrong!");


const allPosts = document.querySelector("#blog-posts");
const postsCont = document.querySelector("#blog-cont");


// Lister ut 9 poster til BLOG siden

function listData(list){
    console.log(list.length); 
  
    allPosts.innerHTML = "";
    for (let item of list) {
      console.log(item);

      let imgScr = item._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url;
      let altTxt = item._embedded['wp:featuredmedia']['0'].alt_text;

      allPosts.innerHTML += `
        <div class="post-card">
            <a href="post.html?id=${item.id}">
                <img id="${item.id}" src="${imgScr}" alt="${altTxt}">
                <div>
                    <h2 class="post-h2 black">${item.title.rendered}</h2>
                    <p class="black">${item.excerpt.rendered}</p>
                </div>
            </a>
        </div>`;
    }

    loadMore.style.display = "block";

}



// Load more posts

const loadMore = document.querySelector("#loadMore")


function loadFunction(list){

    fetch("https://marthebull.no/exam1/wp-json/wp/v2/posts?_embed&per_page=6&page=2", {
        "method": "GET"
    })
    
    .then(response => response.json())
    .then(myData => {
        console.log(myData);
        newListData(myData);
    })
    .catch(error => allPosts.innerHTML = "Something's wrong!");


    console.log("Har hentet nye posts");
    

    function newListData(list) {
        for (let item of list) {
            console.log(item);

            let imgScr = item._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url;
            let altTxt = item._embedded['wp:featuredmedia']['0'].alt_text;

            allPosts.innerHTML += `
            <div class="post-card">
                <a href="post.html?id=${item.id}">
                    <img id="${item.id}" src="${imgScr}" alt="${altTxt}">
                    <div>
                        <h2 class="post-h2 black">${item.title.rendered}</h2>
                        <p class="black">${item.excerpt.rendered}</p>
                    </div>
                </a>
            </div>`;
        }

    }

    loadMore.style.display = "none";
}

loadMore.addEventListener("click", loadFunction)
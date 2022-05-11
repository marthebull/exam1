
fetch("https://marthebull.no/exam1/wp-json/wp/v2/posts?_embed", {
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


// Lister ut 10 poster til BLOG siden

function listData(list){
    console.log(list.length); 
  
    allPosts.innerHTML = "";
    for (let item of list) {
      console.log(item);
      allPosts.innerHTML += `
        <div class="post-card">
            <a href="post.html?id=${item.id}">
                <img id="${item.id}" src="${item._embedded['wp:featuredmedia']['0'].source_url}" alt="${item.alt_text}">
                <h2 class="post-h2 black">${item.title.rendered}</h2>
                <p class="black">${item.excerpt.rendered}</p>
            </a>
        </div>`;
    }

    postsCont.innerHTML += `<button id="loadMore" class="b-black">LOAD MORE POSTS</button>`;
}

// Load more posts

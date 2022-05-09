
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


// Lister ut 10 poster til BLOG siden

function listData(list){
    console.log(list.length); 
  
    allPosts.innerHTML = "";
    for (let item of list) {
      console.log(item);
      allPosts.innerHTML += `
        <div class="post-card">
            <img src="${item._embedded['wp:featuredmedia']['0'].source_url}" alt="Featured blog post image">
            <h2>${item.title.rendered}</h2>
            <p>${item.excerpt.rendered}</p>
        </div>`;
    }
  }
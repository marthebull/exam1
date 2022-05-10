
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
            <a href="post.html?id=${item.id}">
                <img src="${item._embedded['wp:featuredmedia']['0'].source_url}" alt="Featured blog post image">
                <h2 class="post-h2 black">${item.title.rendered}</h2>
                <p class="black">${item.excerpt.rendered}</p>
            </a>
        </div>`;
    }
}

// Load more posts

const loadMore = document.querySelector('#loadMore');
    let currentPosts = 10;
    loadMore.addEventListener('click', (e) => {

        
        const postList = [...document.querySelectorAll('#blog-posts .post-card')];
        for (let i = currentPosts; i < currentPosts + 10; i++) {
            if (postList[i]) {
                postList[i].style.display = 'block';
            }
        }
        currentPosts += 10;

        // Load more button will be hidden after list fully loaded
        if (currentPosts >= postList.length) {
            event.target.style.display = 'none';
        }
    })
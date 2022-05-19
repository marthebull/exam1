
fetch("https://marthebull.no/exam1/wp-json/wp/v2/posts?_embed&per_page=6&page=1", {
	"method": "GET"
})

.then(response => response.json())
.then(myData => {
    //console.log(myData);
    listData(myData);
})
.catch(error => postsCarousel.innerHTML = "Something's wrong!");

const postsCarousel = document.querySelector("#latest-posts");

function listData(list){
    //console.log(list.length); 
  
    postsCarousel.innerHTML = "";
    for (let item of list) {
      //console.log(item);
      postsCarousel.innerHTML += `
        <div class="latest-post-card">
            <a href="post.html?id=${item.id}">
                <img id="${item.id}" src="${item._embedded['wp:featuredmedia']['0'].source_url}" alt="${item.alt_text}">
                <h2 class="post-h2 black">${item.title.rendered}</h2>
                <p class="black">${item.excerpt.rendered}</p>
            </a>
        </div>`;
    }
}

const postsItem = document.querySelector(".latest-post-card")
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
    
let counter = 1;
//const size = postsItem[0].clientWidth;


//nextBtn.addEventListener('click', () => {
  //  postsCarousel.style.transition = "transform 0.4s ease-in-out";
  //  counter++;
  //  console.log(counter);
//});

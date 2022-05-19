
fetch("https://marthebull.no/exam1/wp-json/wp/v2/posts?_embed&per_page=9&page=1", {
	"method": "GET"
})

.then(response => response.json())
.then(myData => {
    console.log(myData);
    listData(myData);
})
.catch(error => postsCarousel.innerHTML = "Something's wrong!");

const postsCarousel = document.querySelector("#latest-posts");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");


function listData(list){
    console.log(list.length); 
  
    postsCarousel.innerHTML = "";
    for (let item of list) {
      console.log(item);
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

postsCarousel.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    console.log("noe skjer!");

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
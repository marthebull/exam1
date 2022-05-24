
fetch("https://marthebull.no/exam1/wp-json/wp/v2/posts?_embed&per_page=9&page=1", {
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

      let imgScr = item._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url;
      let altTxt = item._embedded['wp:featuredmedia']['0'].alt_text;



      postsCarousel.innerHTML += `
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



const prevBtn = document.getElementById('.prevBtn');
const nextBtn = document.getElementById('.nextBtn');
const positionInfo = postsCarousel.getBoundingClientRect();
const scrolling = positionInfo.width;
console.log(positionInfo);


function scrollPrev() {
    //console.log("Knappen ble klikket");
    postsCarousel.scrollLeft -= 350;
}

function scrollNext() {
    //console.log("Knappen ble klikket");
    postsCarousel.scrollLeft += 350;
}



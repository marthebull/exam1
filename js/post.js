const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "posts.html"; }



const url = `https://marthebull.no/exam1/wp-json/wp/v2/posts/${id}`;
//const url = `https://www.geek.no/wp-json/wp/v2/pages/${id}`;
fetch(url)
.then(response => response.json())
.then(data => {
  //console.log('Success:', data);
  displayPost(data);
})
.catch((error) => {
  console.error('Error:', error);
});

const output = document.querySelector("#blog-post");
const metaDesc = document.querySelector("#meta-desc");

function displayPost (data) {
  console.log(data); 
  const title = data.title.rendered;
  const date = data.date;
  const excerpt = data.excerpt.rendered;
  const postContent = data.content.rendered;
  getImageURL(data.featured_media); 
    
    

  let content = `
      <h1>${title}</h1>
      <p class="date">${date}</p>
      <p>${postContent}</p>
  `;

  
  output.innerHTML = content;
  metaDesc.innerHTML = excerpt;
  document.title = title;
  
}


function getImageURL(id) {
  fetch(`https://marthebull.no/exam1/wp-json/wp/v2/media/${id}`)
  .then(response => response.json())
  .then(data => {
    console.log('Success (getImageURL):', data);
    addImage (data.source_url);
  })
  .catch((error) => {
    console.error('Error (getImageURL):', error);
  });
}



function addImage(src) {
  console.log ("IMG: " + src);
  if (src) {
    let img = document.createElement("img");
    img.classList.add("post-hero")
    img.src = src;
    img.alt = "";
    img.width = 640;
    output.prepend(img);
  }
}







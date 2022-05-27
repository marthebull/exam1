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
  addEventlistenersToReceivedData();
})
.catch((error) => {
  console.error('Error:', error);
});


// Henter ut og setter inn innhold til bloggpost

const output = document.querySelector("#blog-post");
const metaDesc = document.getElementsByTagName('meta');
const letterMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function displayPost (data) {
  //console.log(data); 
  const title = data.title.rendered;
  const date = new Date(data.date);
  const excerpt = data.excerpt.rendered;
  const postContent = data.content.rendered;
  const tags = data.tags;
  getImageURL(data.featured_media); 
    
  let postDate = new Date(data.date);
  //console.log(postDate);
  let monthDate = postDate.getMonth();

  let content = `
      <h1>${title}</h1>
      <p class="date">${date.getDate()}. ${letterMonths[monthDate]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}</p>
      <p class="post-content">${postContent}</p>
  `;

  
  output.innerHTML = content;
  document.title = title + " | EXTINCT";
  metaDesc.description.content = excerpt;
  
}


function getImageURL(id) {
  fetch(`https://marthebull.no/exam1/wp-json/wp/v2/media/${id}`)
  .then(response => response.json())
  .then(data => {
    //console.log('Success (getImageURL):', data);
    addImage (data.source_url);
    addEventlistenersToReceivedData()
  })
  .catch((error) => {
    console.error('Error (getImageURL):', error);
  });

}

    

function addImage(src) {
  //console.log ("IMG: " + src);
  if (src) {
    let img = document.createElement("img");
    img.classList.add("post-hero");
    img.src = src;
    img.alt = img.alt_text;
    img.width = 600;
    output.prepend(img);
  }
}



// Lightbox

const lightbox = document.createElement("div");
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


function addEventlistenersToReceivedData() {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.addEventListener('click', e => {
      //console.log(image);
      lightbox.classList.add('active');
      const img = document.createElement('img');
      img.classList.add('active');
      img.src = image.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    })
  })

  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
  })

}


















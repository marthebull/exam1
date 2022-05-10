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

const postHero = document.querySelector("#hero-post");
const output = document.querySelector("#blog-post");

function displayPost (data) {
    console.log(data); 
    const title = data.title.rendered;
    const date = data.date;
    const category = data.categories;
    const postContent = data.content.rendered;
    const heroImg = data.featured_media;
    
    

    let content = `
        <h1>${title}</h1>
        <p>${date}</p>
        <p>${postContent}</p>  
    `;

    postHero.innerHTML = heroImg;
    output.innerHTML = content;
    document.title = title;
  
}







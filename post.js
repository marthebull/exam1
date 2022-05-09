const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const post = params.get("post"); 
console.log(post);

fetch(`https://marthebull.no/exam1/wp-json/wp/v2/posts?${id}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "planets-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "4585718e2cmshe49b203aadfbfbcp132b5bjsn4f21150ae3e2"
	}
})

.then(response => response.json())
.then(myData => {
    console.log(myData[0]);
    listData(myData[0]);
})

.catch(error => out.innerHTML = "Something's wrong!");




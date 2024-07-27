 document.getElementById("searchForm").addEventListener("submit",(event)=>{
            event.preventDefault()
            input = document.getElementById("searchInput").value
        console.log(input)
        })

        const url = 'https://spotify-scraper.p.rapidapi.com/v1/chapter/details?episodeId=4VIm6jghrV0MfwwLyp1E7y';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9af0a9f2a8msh133a02fa989ebcap1019c1jsnb6c5ba5b67df',
		'x-rapidapi-host': 'spotify-scraper.p.rapidapi.com'
	}
};

try {   
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}

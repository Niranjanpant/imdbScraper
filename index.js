const request = require("request-promise")
const cheerio = require("cheerio")


const sampleResult = {
    title:"",
    rank:"",
    imdbRating:"",
    descriptionUrl:"",
    posterUrl:""
}

const url = "https://www.imdb.com/chart/moviemeter/?sort=ir,desc&mode=simple&page=1"

 async function scraper () {

const siteData = await request.get(url);
const $ = await cheerio.load(siteData)

const movies =$("tr").map((i,element) => {
    const title = $(element).find("td.titleColumn > a").text();
    const description = "https://wwww.imdb.com" + $(element).find("td.titleColumn > a").attr("href")
    const imdbRating = $(element).find("td.ratingColumn.imdbRating").text().trim()
    const postUrl = $(element).find(".dGdktI > div > a").attr("href");
    return {title,imdbRating,rank:i,description,postUrl}
})
.get()
console.log(movies)


}


scraper()
import axios from "axios";

const API_KEY = "";

export default function getNews(page = 1) {
    const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'category=technology&' +
        `apiKey=${API_KEY}&` +
        'pageSize=5&' +
        `page=${page}`;

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(({ data }) => {
                const news = data.articles;
                resolve(news);
            })
            .catch(reject)
    });
}
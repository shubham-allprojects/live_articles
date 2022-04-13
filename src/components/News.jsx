import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import defaultImage from './DefaultImages/noImg.png'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const headline = `Top ${props.category} Headlines`
    const updateNews = async () => {
        let { country, category } = props;
        
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=01da2a93a2634f2093f493581a18ded6`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
    }

    

    useEffect(() => {
        updateNews()
    }, [])

    return (
        <div className='container my-3'>
            <h1 className='text-center my-2 headline'>{headline}</h1>
            <div className='row'>
                {articles.map((article) => {
                    return <div className='col-12 col-md-6 col-lg-3' key={article.url}>
                        <NewsItem title={article.title ? article.title.slice(0, 30) + "..." : "No title Available"} desc={article.description ? article.description.slice(0, 68) + "..." : " No Description Available"} Img={article.urlToImage ? article.urlToImage : { defaultImage }} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default News
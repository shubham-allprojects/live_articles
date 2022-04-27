import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

const News = (props) => {
    // useState Hook for defining state for the component
    const [articles, setArticles] = useState([])   // news articles in the API
    const [page, setPage] = useState(2)
    const [noMore, setNoMore] = useState(true)    // For infinite scroll Bar

    // Function to Fetch First 8 articles from API
    const updateNews = async () => {
        let { country, category } = props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=01da2a93a2634f2093f493581a18ded6&page=1&pageSize=8`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
    }
    useEffect(() => {
        updateNews()
        // eslint-disable-next-line 
    }, [])

    // Fetch next 8 Articles.
    const fetchArticles = async () => {
        let { country, category } = props;
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=01da2a93a2634f2093f493581a18ded6&page=${page}&pageSize=8`)
        let parsedData = await data.json()
        return parsedData.articles
    }

    // Function for Infinite Scroll.
    const fetchMore = async () => {
        const articlesFromApi = await fetchArticles();
        setTimeout(() => {
            setArticles([...articles, ...articlesFromApi]);
        }, 1000);
        if (articlesFromApi.length === 0 || articlesFromApi.length < 8) {
            setNoMore(false)
        }
        setPage(page + 1)
    }
    return (<>
        {/* Infinite Scroll Bar */}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMore}
            hasMore={noMore}
            // Loader/Spinner image will be displayed e.g. Loading....  check Spinner Component.
            loader={<Spinner />}
        >
            <div className='container'>
                <div className='row d-flex justify-content-start'>
                    {/* Get data of each article from api and send required data as props to the NewsItem component  */}
                    {articles.map((article) => {
                        return <div className='col-12 col-md-6 col-lg-4' key={article.url}>
                            <NewsItem title={article.title ? article.title.slice(0, 63) + ".." : "No title Available"} Img={article.urlToImage} read_more={article.url} date={article.publishedAt} source={article.source.name} />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
    </>
    )
}

export default News
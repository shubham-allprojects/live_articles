import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

const News = (props) => {
    // useState Hook for defining state for the component
    const [articles, setArticles] = useState([])   // news articles in the API
    const [page, setPage] = useState(2)
    const [noMore, setNoMore] = useState(true)    // For infinite scroll Bar

    // To change Headline Category wise e.g if we click on Technology, Headline will be "Top Technology Headlines"
    const headline = `Top ${props.category} Headlines`

    // Function to Fetch First 10 articles from API
    const updateNews = async () => {
        let { country, category } = props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=40f6b8291b844866a97416477036d8f5&page=1&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
    }
    useEffect(() => {
        updateNews()
        // eslint-disable-next-line 
    }, [])

    // Fetch next 10 Articles.
    const fetchArticles = async () => {
        let { country, category } = props;
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=40f6b8291b844866a97416477036d8f5&page=${page}&pageSize=10`)
        let parsedData = await data.json()
        return parsedData.articles
    }

    // Function for Infinite Scroll.
    const fetchMore = async () => {
        const articlesFromApi = await fetchArticles();
        setTimeout(() => {
            setArticles([...articles, ...articlesFromApi]);
        }, 1000);
        if (articlesFromApi.length === 0 || articlesFromApi.length < 10) {
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
            endMessage={<h2 style={{ textAlign: "center" }}>
                <span className='my-5 msg'>You have seen it All !</span>
            </h2>}
        >
            <div className='container my-3'>
                <h1 className='text-center my-2 headline'>{headline}</h1>
                <div className='row'>
                    {/* Get data of each article from api and send required data as props to the NewsItem component  */}
                    {articles.map((article) => {
                        return <div className='col-12 col-md-6 col-lg-3' key={article.url}>
                            <NewsItem title={article.title ? article.title.slice(0, 30) + "..." : "No title Available"} desc={article.description ? article.description.slice(0, 68) + "..." : " No Description Available"} Img={article.urlToImage} read_more={article.url} date={article.publishedAt} source={article.source.name} />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
    </>
    )
}

export default News
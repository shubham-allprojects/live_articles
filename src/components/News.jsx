import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(2)
    const [noMore, setNoMore] = useState(true)

    const headline = `Top ${props.category} Headlines`
    const updateNews = async () => {
        let { country, category, apiKey } = props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
    }
    useEffect(() => {
        updateNews()
        // eslint-disable-next-line 
    }, [])

    // Get next 10 Articles.
    const fetchArticles = async () => {
        let { country, category, apiKey } = props;
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=10`)
        let parsedData = await data.json()
        return parsedData.articles
    }


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

        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMore}
            hasMore={noMore}
            // 
            loader={<Spinner />}
            endMessage={<h2 style={{ textAlign: "center" }}>
                <span className='my-5 msg'>You have seen it All !</span>
            </h2>}
        >
            <div className='container my-3'>
                <h1 className='text-center my-2 headline'>{headline}</h1>
                <div className='row'>
                    {articles.map((article) => {
                        return <div className='col-12 col-md-6 col-lg-3' key={article.url}>
                            <NewsItem title={article.title ? article.title.slice(0, 30) + "..." : "No title Available"} desc={article.description ? article.description.slice(0, 68) + "..." : " No Description Available"} Img={article.urlToImage} read_more={article.url} date={article.publishedAt} />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
    </>
    )
}

export default News
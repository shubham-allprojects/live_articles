import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

const News = (props) => {
  // useState Hook for defining state for the component
  const [articles, setArticles] = useState([]); // news articles in the API
  const [page, setPage] = useState(2);
  const [noMore, setNoMore] = useState(true); // For infinite scroll Bar
  const heading = `Top - ${props.category} News`

  // Function to Fetch First 15 articles from API
  const updateNews = async () => {
    let { country, category } = props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=45ff24ff7b414dccafa74c8237e5b6d9&page=1&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  // Fetch next 15 Articles.
  const fetchArticles = async () => {
    let { country, category } = props;
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=45ff24ff7b414dccafa74c8237e5b6d9&page=${page}&pageSize=15`
    );
    let parsedData = await data.json();
    return parsedData.articles;
  };

  // Function for Infinite Scroll.
  const fetchMore = async () => {
    const articlesFromApi = await fetchArticles();
    setTimeout(() => {
      setArticles([...articles, ...articlesFromApi]);
    }, 1000);
    if (articlesFromApi.length === 0 || articlesFromApi.length < 15) {
      setNoMore(false);
    }
    setPage(page + 1);
  };

  return (
    <div>
      {/* Infinite Scroll Bar */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={noMore}
        // Loader/Spinner image will be displayed e.g. Loading....  check Spinner Component.
        loader={<Spinner />}
      >
        <div className="container pb-4">
          <h2 className="text-capitalize text-center py-md-1 pt-1" style={{ "color": "purple" }}>{heading}</h2>
          <div className="row d-flex justify-content-start">
            {/* Get data of each article from api and send required data as props to the NewsItem component  */}
            {articles.map((article) => {
              return (
                <div className="col-10 col-md-4 col-lg-3" key={article.url}>
                  <NewsItem
                    title={
                      article.title
                        ? article.title.slice(0, 44) + ".."
                        : "No title Available"
                    }
                    Img={article.urlToImage}
                    read_more={article.url}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;

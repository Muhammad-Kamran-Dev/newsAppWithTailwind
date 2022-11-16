import React, { useState, useEffect } from "react";
import HeroSlider from "./HeroSlider";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

export default function News({ pageSize, Category, language, country }) {

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState("");
    const [totalResults, setTotalResults] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const apiKey = process.env.REACT_APP_Api_Key;

    useEffect(() => async () => {
        setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${Category}&country=${country}&language=${language}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true);// loading
        setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setProgress(70);
        setLoading(false);
        setLoaded(true);
        setProgress(100);
        // eslint-disable-next-line
    }, [])

    let fetchMoreData = async () => {
        setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${Category}&country=${country}&language=${language}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        setProgress(50);
        setLoading(true);// loading
        let data = await fetch(url);
        setProgress(70);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setPage(page + 1);
        setLoading(false);
        setProgress(100);

    };
    const checkData = () => {
        if (page < Math.ceil(totalResults / pageSize)) return true;
        if (page === Math.ceil(totalResults / pageSize)) {
            return false;
        }
        if (page <= 1) return false;
    };

    let handleNull = (text) => {
        return text ? (text.length > 50 ? text.slice(0, 100) : text) : "";
    };

    let HeroSliderText = !loading
        ? {
            title: handleNull(articles[0].source.name),
            heading: handleNull(articles[0].title),
            description: handleNull(articles[0].content),
            personRead: articles[0].author
                ? articles[0].author
                : articles[0].source.name,
            Date: handleNull(new Date(articles[0].publishedAt)),
            imageUrl: articles[0].urlToImage
                ? articles[0].urlToImage
                : "",
        }
        : "";

    return (
        <>
            <div>
                <LoadingBar
                    color='#e67700'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
            </div>
            {/* to show a Hero slider if api load  */}
            {loading ? (<Spinner />) : (<HeroSlider sliderText={HeroSliderText} />)}

            {!loading && (
                <h2 className="text-center font-newFont font-bold text-3xl my-3">
                    {Category.split(" ").map(cat => cat[0].toUpperCase() + cat.slice(1))} News
                </h2>
            )}

            {!loading && (<InfiniteScroll
                dataLength={totalResults}
                next={fetchMoreData}
                hasMore={checkData()}
                loader={<h1> Loading loaded {loaded ? "true" : "false"}</h1>}
            >
                <div className="px-52 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {articles.map((article) => {

                        let title = article.title && article.title ? article.title : "Unknown";
                        let description = article.description && article.description ? article.description : "Unknown";
                        let source = article.source.name && article.source.name ? article.source.name : "Unknown";
                        let author = article.author && article.author ? article.author : "Unknown";

                        return (
                            <NewsItem
                                title={title}
                                description={description}
                                urlToImage={article.urlToImage}
                                newsUrl={article.url}
                                altText={source}
                                key={article.url}
                                publishedAt={new Date(article.publishedAt)}
                                source={source}
                                author={author}
                            />
                        );
                    })}
                </div>
            </InfiniteScroll>)}
        </>
    );

}
News.propTypes = {
    Category: PropTypes.string,
    language: PropTypes.string,
    pageSize: PropTypes.number
};
News.defaultProps = {
    Category: "general",
    pageSize: 5,
    language: "en",
    country: "in"
};
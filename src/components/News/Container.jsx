import React, { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";
import NoNews from "./NoNews";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchNews } from "../../fetchData/fetchNews";
import Loader from "../Loader/Loader";

export default function Container({ loaderData, category }) {
  const [data, setData] = useState(loaderData());
  const [hasMore, setHasMore] = useState(
    !(data.articles.length == data.totalResults)
  );
  let i = useRef(1);

  async function loadMoreData() {
    let result = await fetchNews(category, ++i.current);
    let articles = [...data.articles, ...result.articles];
    setData({ ...data, articles });
    if (data.articles.length == data.totalResults) setHasMore(false);
  }

  return (
    <div className="overflow-auto h-full m-auto p-2" id="parent">
      <InfiniteScroll
        dataLength={data.articles.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<p className="text-center">Loading...</p>}
        endMessage={
          <p className="text-center">
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollableTarget="parent"
      >
        <div className="grid grid-cols-3 gap-8 p-8 w-3/4 m-auto tablet:w-full mid-desktop:grid-cols-2 small-tablet:grid-cols-1">
          {data.articles ? (
            data.articles.map((element) => (
              <NewsCard
                key={element.url}
                title={element.title}
                imgSrc={element.urlToImage}
                description={element.description}
                url={element.url}
                time={new Date(element.publishedAt).toUTCString()}
                source={element.source.name}
              />
            ))
          ) : (
            <NoNews />
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

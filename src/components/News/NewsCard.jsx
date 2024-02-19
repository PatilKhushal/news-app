import React, { useState } from "react";

function NewsCard({ title, imgSrc, description, url, time, source }) {
  const [hidden, sethidden] = useState(true);
  return (
    <div
      className="relative p-4 flex flex-col gap-2 bg-bgNewsCard rounded-xl  text-newsCardContent overflow-hidden"
      onMouseEnter={() => sethidden(!hidden)}
      onMouseLeave={() => sethidden(!hidden)}
    >
      <div className="flex justify-between text-[#2A2A72] font-semibold flex-col">
        <span>{time}</span>
        <span>{source}</span>
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <img src={imgSrc} alt="" />
      {!hidden && <div className="toTopAnimation flex flex-col p-4 gap-2 border-black absolute w-full h-max bottom-0 right-0 rounded-b-xl bg-black text-white bg-opacity-75">
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 px-4 py-2 rounded">Read More</button>
        </a>
      </div>}
    </div>
  );
}

export default NewsCard;

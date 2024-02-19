import React from "react";

function NoNews() {
  return (
    <div className="flex justify-center items-center flex-col h-full gap-4">
      <h1 className="text-purple-500 text-5xl">No News for the moment</h1>
      <div className="text-center">
        <p className="text-2xl">Turn your data on</p>
        <i>OR</i>
        <p className="text-2xl">Try again after some time</p>
      </div>
    </div>
  );
}

export default NoNews;

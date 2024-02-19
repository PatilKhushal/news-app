import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../News/Container";

function Home() {
  return (
      <Container loaderData={useLoaderData} category={'general'}/>
  );
}

export default Home;

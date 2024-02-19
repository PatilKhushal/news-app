import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Container from '../News/Container';

function Entertainment() {
  const data = useLoaderData();
  return (
    <Container loaderData={useLoaderData} category={'entertainment'}/>
  )
}

export default Entertainment

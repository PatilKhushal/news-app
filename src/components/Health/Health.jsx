import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Container from '../News/Container';

function Health() {
  const data = useLoaderData();
  return (
    <Container loaderData={useLoaderData} category={'health'}/>
  )
}

export default Health

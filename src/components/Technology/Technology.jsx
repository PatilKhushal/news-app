import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Container from '../News/Container';

function Technology() {
  return (
    <Container loaderData={useLoaderData} category={'technology'}/>
  )
}

export default Technology

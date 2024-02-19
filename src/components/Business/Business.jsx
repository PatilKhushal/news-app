import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Container from '../News/Container';

function Business() {
  return (
    <Container loaderData={useLoaderData} category={'business'}/>
  )
}

export default Business

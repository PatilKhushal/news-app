import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Container from '../News/Container';

function Science() {
  return (
    <Container loaderData={useLoaderData} category={'science'}/>
  )
}

export default Science

import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Container from '../News/Container';

function Sports() {
  return (
    <Container loaderData={useLoaderData} category={'sports'}/>
  )
}

export default Sports

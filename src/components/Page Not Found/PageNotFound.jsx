import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

function PageNotFound() {
  const error = useRouteError()
  return (
    <div className='h-dvh flex flex-col items-center justify-center gap-4'>
      <h1>Page Not Found</h1>
      <p>{JSON.stringify(error)}</p>
      <Link to={'/'} className='bg-blue-500 px-4 py-2 rounded'>Homepage</Link>
    </div>
  )
}

export default PageNotFound

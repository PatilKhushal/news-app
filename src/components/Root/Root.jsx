import React from 'react'
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Root() {
  const navigation = useNavigation()
  return (
    <div className='flex h-dvh flex-col bg-background'>
        <Header/>
        {navigation.state == 'loading' ? <Loader/> : <Outlet/>}
    </div>
  )
}

export default Root

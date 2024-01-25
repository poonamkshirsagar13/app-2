import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MenuRoutes from '../../routes/routes';

export  function RouteOutletComponent() {
  return (
    <>
      <Routes>
        {
          Array.isArray(MenuRoutes) && MenuRoutes.map((({path,component}, i) =><Route path = {path}
          element={component} key={path+i}/>))
        }
      </Routes>
    </>
  )
}

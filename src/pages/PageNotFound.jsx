import React from 'react'
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const error = useRouteError();
    console.error(error);

  return (
    <div id="error-page">
         <h3 className='title'>{error.statusText || error.message}</h3>
    </div>
  )
}

export default PageNotFound
import React from 'react'
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
         <i>{error.statusText || error.message}</i>
    </div>
  )
}

export default PageNotFound
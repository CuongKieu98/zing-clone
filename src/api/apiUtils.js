import axios from "axios";
import { useNavigate } from "react-router-dom";

export function handleError(error) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  console.error("API call failed:" + error);
  var errorPage = "/error";
  navigate(errorPage);
  throw error;
}

export function makeApiCall(options) {
  return axios(options)
    .then((response) => {
      var data = response.data;
      return data;
    })
    .catch((error) => {
      return handleError(error);
    });
}
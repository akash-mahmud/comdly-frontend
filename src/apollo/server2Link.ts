import { ApolloLink, HttpLink } from "@apollo/client";
import { getAuthData } from "../utils/session";
const auth = getAuthData();
const token = auth.token ? `Bearer ${auth.token}` : "";


import fetch from 'cross-fetch';
import { tokenRefreshLink } from "./tokenRefreshLink";
import { SERVER_2 } from "../config/secrets";
export const server2Link = ()=>     {
  let token =''
  try {
    token = JSON.parse(localStorage.getItem('yellow-cartee') as string)
  } catch (error) {
     token =''
  }
  return ApolloLink.from([
    new HttpLink({
      uri: SERVER_2,
headers:{
    authorization: `Bearer ${token}`

},
      credentials: 'include',
      fetch
    }),
  ])}
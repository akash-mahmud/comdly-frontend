import { ApolloLink, createHttpLink } from "@apollo/client";


import fetch from 'cross-fetch';
import { DATA_SERVER } from "../config/secrets";
export const dataServerLink =  ()=> { 
  let token =''
  try {
    token = JSON.parse(localStorage.getItem('yellow-cartee') as string)
  } catch (error) {
     token =''
  }
  return ApolloLink.from([
  
    createHttpLink({
      uri: DATA_SERVER,
      headers: {      
           authorization: `Bearer ${token}`,
           'Apollo-Require-Preflight': 'true',
// 'Access-Control-Allow-Credentials':'true'
    },
      credentials: 'include',
      fetch,

    }),
  ])}
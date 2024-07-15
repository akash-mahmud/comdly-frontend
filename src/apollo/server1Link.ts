import { ApolloLink } from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';


import fetch from 'cross-fetch';
import { SERVER_1 } from "../config/secrets";
export const server1Link =  ()=> { 
  let token =''
  try {
    token = JSON.parse(localStorage.getItem('yellow-cartee') as string)
  } catch (error) {
     token =''
  }
  return ApolloLink.from([
  
    createUploadLink({
      uri: SERVER_1,
      headers: {      
           authorization: `Bearer ${token}`,
           'Apollo-Require-Preflight': 'true',
// 'Access-Control-Allow-Credentials':'true'
    },
      credentials: 'include',
      fetch,

    }),
  ])}
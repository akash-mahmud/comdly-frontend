import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { RefreshTokenDocument } from "../graphql/generated/schema";
import fetch from 'cross-fetch';

import {getAuthData} from '../utils/session'
import { SERVER_1 } from "../config/secrets";
const auth = getAuthData();

const token = auth.token ? `Bearer ${auth.token}` : "";
export const renewTokenApiClient = new ApolloClient({
    link:     new HttpLink({
      uri: SERVER_1,
      headers: { Authorization: token,  
           'Apollo-Require-Preflight': 'false'
    },
      credentials: 'include',
      fetch
    }),
    cache:new InMemoryCache(),
  })
  export const refreshToken = async ():Promise<string|null> => {
  
  const {data} = await renewTokenApiClient.mutate({
    mutation:RefreshTokenDocument
  })
  
    const newAccessToken = data?.refreshToken
    
  return newAccessToken
  };
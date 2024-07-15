
import {getAuthData} from '../utils/session'
import { ApolloLink } from "@apollo/client";
const auth = getAuthData();

const token = auth.token ? `Bearer ${auth.token}` : "";

export const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${JSON.parse(localStorage.getItem('yellow-cartee') as string)}`,
    },
  }));

  return forward(operation);
});
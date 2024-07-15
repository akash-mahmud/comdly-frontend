import { TokenRefreshLink } from 'apollo-link-token-refresh';
import {getAuthData} from '../utils/session'
const auth = getAuthData();
import {isJwtExpired} from 'jwt-check-expiration'
import { refreshToken } from './renew';
import { store } from '../store';
import { setRenewdToken } from '../store/slices/auth/authSlice';
import client from './client';
import { link } from './link';
export const tokenRefreshLink=   new TokenRefreshLink({
    isTokenValidOrUndefined: async () => {
        try {
            return !isJwtExpired(auth.token)

        } catch (error) {
            return false            
        }

    },
    // @ts-ignore
    fetchAccessToken: () => {
      return refreshToken() 
    },
    handleFetch: (accessToken , operation) => {
        if (accessToken) {

          store.dispatch(setRenewdToken(accessToken))
     

        }

 
    },
    handleResponse: (operation, accessTokenField) => (responsce:string) => {
      
     return {
         access_token: responsce
      }
    },
    handleError: err => {
       // full control over handling token fetch Error
       console.warn('Your refresh token is invalid. Try to relogin');
       console.error(err);
       
       // When the browser is offline and an error occurs we don’t want the user to be logged out of course.
       // We also don’t want to delete a JWT token from the `localStorage` in this case of course.
       if (
         !navigator.onLine ||
         (err instanceof TypeError &&
           err.message === "Network request failed")
       ) {
         console.log("Offline -> do nothing 🍵")
       } else {
         console.log("Online -> log out 👋")

         // your custom action here
      }       
    }
  })

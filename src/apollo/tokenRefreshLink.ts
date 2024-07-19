import { TokenRefreshLink } from 'apollo-link-token-refresh';
import {getAuthData, USER_COOKIE} from '../utils/session'
const auth = getAuthData();
import {isJwtExpired} from 'jwt-check-expiration'
import { refreshToken } from './renew';

export const tokenRefreshLink=   new TokenRefreshLink({
    isTokenValidOrUndefined: async () => {
        try {
            return !isJwtExpired(auth)

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
localStorage.setItem(USER_COOKIE , accessToken)
          // store.dispatch(setRenewdToken(accessToken))
     

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

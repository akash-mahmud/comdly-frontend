'use client';

import { useMeQuery, User } from '@/graphql/generated/schema';
import { USER_COOKIE } from '@/utils/session';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect, useState } from 'react';

interface UserType {
  name: string;
  avatar: string;
  role: string;
}

const demoUser = {
  name: 'Jhon Doe',
  avatar:
    'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  role: 'admin',
};

export default function useAuth() {
  const [user, setUser] = useState({});
  const [isAuthorized, setisAuthorized] = useState(false)
const {data , loading} = useMeQuery()
  useEffect(() => {
 
if (data?.me) {
  setUser(data?.me)
  setisAuthorized(data?.me?.id?true:false)
}
    return ()=> {}
  }, [loading, data])
  console.log(user);
  
  return {
    isAuthorized,
    user,
    loading,
    authorize(user: User) {
      setisAuthorized(true);
      setUser(user);
    },
    unauthorize() {
      setisAuthorized(false);
      setUser({});
      //? call server logout and all localstorage and cookie clear function


    },
  };
}

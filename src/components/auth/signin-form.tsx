'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Routes } from '@/config/routes';
import Input from '@/components/ui/form-fields/input';
import Button from '@/components/ui/button';
import Checkbox from '@/components/ui/form-fields/checkbox';
import useAuth from '@/hooks/use-auth';
import { useModal } from '@/components/modals/context';
import {useAppDispatch, useAppSelector} from '@/store'

// import {useDispatch} from 'react-redux'
import { login } from '@/store/slices/auth/authSlice';
import { useState } from 'react';
import { Spin } from 'antd'

const loginInfoSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'The email is required.' })
    .email({ message: 'The email is invalid.' }),
  password: z
    .string()
    .min(4, { message: 'Password must be 4 character long.' }),
  remember: z.boolean(),
});

type SignInType = z.infer<typeof loginInfoSchema>;

export default function SigninForm() {
  const { authorize } = useAuth();
  const { closeModal } = useModal();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth)
  console.log(user);
  
  const [loading, setloading] = useState(false)
  const dispatch = useAppDispatch();
  const {
    register,
    
    handleSubmit,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(loginInfoSchema),
  });

  // TO-DO: Send data to API onSubmit.
 async function handleFormSubmit(data: SignInType) {
    setloading(()=>true) 

   
    await dispatch(login({
      email:data.email,
      password:data.password,
     }))
    // authorize();


    closeModal();
      setloading(()=>false);
  }

  return (
    <Spin  spinning={loading}>
      
    <form noValidate onSubmit={handleSubmit((d) => handleFormSubmit(d))}>
      <Input
        type="text"
        label="Email"
        className="mb-4"
        error={errors?.email?.message}
        required
        {...register('email')}
      />
      <Input
        type="password"
        label="Password"
        className="mb-4"
        error={errors?.password?.message}
        required
        {...register('password')}
      />
      <div className="mb-7 flex items-center justify-between">
        <Checkbox
          size="sm"
          label="Remember Me"
          labelClassName="ml-2"
          inputClassName="!text-gray-dark"
          {...register('remember')}
        />
        <Link
          href={Routes.auth.forgotPassword}
          className="  text-sm font-semibold leading-6 text-primary underline"
        >
          Forget Password?
        </Link>
      </div>
      <Button type="submit" className="mb-2 w-full" size="xl">
        Sign In
      </Button>
      <p className="text-sm font-semibold leading-6 text-gray">
        Not member yet?{' '}
        <Link href={Routes.auth.signUp} className="text-primary underline">
          Create an account
        </Link>
      </p>
      <div className="relative mt-7 mb-8 text-center before:absolute before:top-1/2 before:left-0 before:h-[1px] before:w-full before:bg-gray-200">
        <span className="relative z-10 m-auto inline-flex bg-white px-5">
          Or
        </span>
      </div>
    </form>
  </Spin>
  );
}

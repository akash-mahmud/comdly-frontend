import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Booking = {
  __typename?: 'Booking';
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars['String']['output']>;
};

export type BookingFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
};

export type Company = {
  __typename?: 'Company';
  avater?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  employee?: Maybe<Array<Maybe<Employee>>>;
  id?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type CompanyInput = {
  avater: Scalars['String']['input'];
  description: Scalars['String']['input'];
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type Employee = {
  __typename?: 'Employee';
  company?: Maybe<Company>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type EmployeeInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPaymentMethod?: Maybe<Scalars['String']['output']>;
  createBooking?: Maybe<DefaultResposnce>;
  createCompany?: Maybe<DefaultResposnce>;
  createEmployee?: Maybe<DefaultResposnce>;
  createPlan?: Maybe<DefaultResposnce>;
  createService?: Maybe<DefaultResposnce>;
  createsubscription?: Maybe<DefaultResposnce>;
  deleteBooking?: Maybe<DefaultResposnce>;
  deleteService?: Maybe<DefaultResposnce>;
  editCompany?: Maybe<DefaultResposnce>;
  editPlan?: Maybe<DefaultResposnce>;
  login?: Maybe<Loginresponsce>;
  ownerLogin?: Maybe<Loginresponsce>;
  ownerRegister?: Maybe<DefaultResposnce>;
  register?: Maybe<DefaultResposnce>;
  updateBooking?: Maybe<DefaultResposnce>;
  updateService?: Maybe<DefaultResposnce>;
  updatesubscription?: Maybe<DefaultResposnce>;
};


export type MutationAddPaymentMethodArgs = {
  token: Scalars['String']['input'];
};


export type MutationCreateBookingArgs = {
  booking?: InputMaybe<BookingInput>;
};


export type MutationCreateCompanyArgs = {
  company?: InputMaybe<CompanyInput>;
};


export type MutationCreateEmployeeArgs = {
  employee?: InputMaybe<EmployeeInput>;
  user?: InputMaybe<UserInput>;
};


export type MutationCreatePlanArgs = {
  plan?: InputMaybe<PlanInput>;
};


export type MutationCreateServiceArgs = {
  service?: InputMaybe<ServiceInput>;
};


export type MutationCreatesubscriptionArgs = {
  subscription?: InputMaybe<SubscriptionInput>;
};


export type MutationDeleteBookingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditCompanyArgs = {
  company?: InputMaybe<CompanyInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditPlanArgs = {
  id: Scalars['String']['input'];
  plan?: InputMaybe<PlanInput>;
};


export type MutationLoginArgs = {
  user?: InputMaybe<LoginInput>;
};


export type MutationOwnerLoginArgs = {
  user?: InputMaybe<LoginInput>;
};


export type MutationOwnerRegisterArgs = {
  owner?: InputMaybe<OwnerInput>;
  user?: InputMaybe<UserInput>;
};


export type MutationRegisterArgs = {
  user?: InputMaybe<UserInput>;
};


export type MutationUpdateBookingArgs = {
  booking?: InputMaybe<BookingInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<ServiceInput>;
};


export type MutationUpdatesubscriptionArgs = {
  id: Scalars['String']['input'];
  subscription?: InputMaybe<SubscriptionInput>;
};

export type Owner = {
  __typename?: 'Owner';
  company?: Maybe<Company>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type OwnerInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Plan = {
  __typename?: 'Plan';
  createdAt?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  is_default?: Maybe<Scalars['Boolean']['output']>;
  is_free?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  planType?: Maybe<PlanType>;
  price?: Maybe<Scalars['Float']['output']>;
  trial_days?: Maybe<Scalars['Int']['output']>;
};

export type PlanInput = {
  description: Scalars['String']['input'];
  interval_count?: InputMaybe<Scalars['Int']['input']>;
  is_default: Scalars['Boolean']['input'];
  is_free: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  planType: PlanType;
  price: Scalars['Float']['input'];
  trial_days: Scalars['Int']['input'];
};

export enum PlanType {
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type Query = {
  __typename?: 'Query';
  fetchAllBookings?: Maybe<FetchAllBookingsResponsce>;
  fetchAllService?: Maybe<FetchAllServiceResponsce>;
  getBooking?: Maybe<Booking>;
  getCompany?: Maybe<Company>;
  getEmployee?: Maybe<Employee>;
  getOwner?: Maybe<Owner>;
  getPlan?: Maybe<Plan>;
  getService?: Maybe<Service>;
  healthCheck?: Maybe<Scalars['String']['output']>;
  me?: Maybe<User>;
  subscription?: Maybe<Subscription>;
};


export type QueryFetchAllBookingsArgs = {
  filter?: InputMaybe<BookingFilterInput>;
};


export type QueryFetchAllServiceArgs = {
  filter?: InputMaybe<ServiceFilterInput>;
};


export type QueryGetBookingArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCompanyArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetEmployeeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetOwnerArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPlanArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySubscriptionArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Service = {
  __typename?: 'Service';
  booking?: Maybe<Booking>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ServiceFilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type ServiceInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionInput = {
  planId?: InputMaybe<Scalars['String']['input']>;
};

export enum SubscriptionStatus {
  Active = 'active',
  BalanceEmpty = 'balance_empty',
  Failed = 'failed',
  Pending = 'pending',
  RenewNeeded = 'renew_needed'
}

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRole>;
};

export type UserInput = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'admin',
  Company = 'company',
  Public = 'public',
  Superadmin = 'superadmin'
}

export enum CompanyRole {
  Employee = 'employee',
  Owner = 'owner'
}

export type DefaultResposnce = {
  __typename?: 'defaultResposnce';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FetchAllBookingsResponsce = {
  __typename?: 'fetchAllBookingsResponsce';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<Booking>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type FetchAllServiceResponsce = {
  __typename?: 'fetchAllServiceResponsce';
  count?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<Array<Maybe<Service>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Loginresponsce = {
  __typename?: 'loginresponsce';
  accessToken?: Maybe<Scalars['String']['output']>;
  isAuthenticated?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type Subscription = {
  __typename?: 'subscription';
  createdAt?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  plan?: Maybe<Plan>;
  status?: Maybe<SubscriptionStatus>;
  subscription_end?: Maybe<Scalars['String']['output']>;
  subscription_time?: Maybe<Scalars['Float']['output']>;
  user?: Maybe<User>;
};

export enum UserRole {
  Admin = 'admin',
  Company = 'company',
  Public = 'public',
  Superadmin = 'superadmin'
}

export type RegisterMutationVariables = Exact<{
  user?: InputMaybe<UserInput>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename: 'defaultResposnce', message?: string | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null } | null };

export type LoginMutationVariables = Exact<{
  user?: InputMaybe<LoginInput>;
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'loginresponsce', accessToken?: string | null, message?: string | null, isAuthenticated?: boolean | null, success?: boolean | null, user?: { __typename?: 'User', id?: string | null, firstname?: string | null, lastname?: string | null, email?: string | null, role?: UserRole | null } | null } | null };


export const RegisterDocument = gql`
    mutation Register($user: UserInput) {
  register(user: $user) {
    __typename
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    firstname
    lastname
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation Login($user: LoginInput) {
  login(user: $user) {
    accessToken
    message
    user {
      id
      firstname
      lastname
      email
      role
    }
    isAuthenticated
    success
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
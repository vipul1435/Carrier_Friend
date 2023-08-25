import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    reducerPath: 'adminApi',
    tagTypes: [],
    endpoints: (builder) => ({
        shareJob: builder.mutation({
            query: (data) => ({
                url: '/contribute',
                method: 'POST',
                body:data,
            }),
            rovidesTags:["shareJob"]
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body:data,
            }),
            rovidesTags:["userLogin"]
        }),
        userSignup:builder.mutation({
            query: (data) => ({
                url:'auth/signup',
                method:'POST',
                body:data
            }),
            providesTags:['userSignup']
        }),
        getJobs:builder.query({
            query:(query)=>({
                url:`/contribute?${query}`,
                method:"GET"
            }),
            providesTags:['getJobs']
        })
    }),
});

export const {useShareJobMutation,useUserLoginMutation,useUserSignupMutation,useGetJobsQuery} = api;
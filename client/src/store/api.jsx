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
                credentials:'include'
            }),
            rovidesTags:["shareJob"]
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body:data,
                credentials:'include'
            }),
            rovidesTags:["userLogin"]
        }),
        userSignup:builder.mutation({
            query: (data) => ({
                url:'auth/signup',
                method:'POST',
                body:data,
                credentials:'include'
            }),
            providesTags:['userSignup']
        }),
        getJobs:builder.query({
            query:(query)=>({
                url:`/contribute?${query}`,
                method:"GET",
                credentials:'include'
            }),
            providesTags:['getJobs']
        }),
        verifyUser:builder.query({
            query:()=>({
                url:'/auth/verify',
                method:'GET',
                credentials:'include'
            }),
            providesTags:['verifyUser']
        }),
        updateJob:builder.mutation({
            query:(data)=>({
                url:`/contribute/${data.id}?${data.query}`,
                method:'PUT',
                credentials:'include'
            }),
            providesTags:['updateJob']
        }),
        logout:builder.mutation({
            query:()=>({
                url:'/auth/logout',
                method:'GET',
                credentials:'include'
            }),
            providesTags:['logout']
        })
    }),
});

export const {useShareJobMutation,useUserLoginMutation,useUserSignupMutation,useGetJobsQuery,useVerifyUserQuery,useUpdateJobMutation,useLogoutMutation} = api;
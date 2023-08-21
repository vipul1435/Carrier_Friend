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
    }),
});

export const {useShareJobMutation} = api;
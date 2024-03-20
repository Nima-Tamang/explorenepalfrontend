

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const destinationItemApi = createApi({
    reducerPath: "destinationItemApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:7173/api/",
    }),
    endpoints: (builder) => ({
        getDestination: builder.query({
            query: () => "destination",
        }),
        getDestinationByCode: builder.query({
            query: (code: string) => `destination/${code}` // Corrected URL
        }),
    })
});

export const { useGetDestinationQuery, useGetDestinationByCodeQuery } = destinationItemApi;

export default destinationItemApi;

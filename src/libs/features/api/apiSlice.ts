// apiSlice.ts

import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { IApiError, IApiResponse } from "../../types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;

const baseQuery = fetchBaseQuery({ baseUrl });

const baseQueryWithTransform: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    const errorData = result.error.data as IApiError;
    return {
      error: {
        status: result.error.status,
        data: errorData,
      },
    };
  }
  if (result.data) {
    const { payload } = result.data as IApiResponse<unknown>;
    return { data: payload, meta: result.meta as FetchBaseQueryMeta };
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithTransform,
  endpoints: () => ({}),
});

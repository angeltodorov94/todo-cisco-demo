import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ToDo } from '../utils/types'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/user/1',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<ToDo[], void>({
      query: () => 'todos',
    }),
  }),
})

export const { useGetPostsQuery } = todosApi

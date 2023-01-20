import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ToDoApi } from '../utils/types'

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/user/1',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<ToDoApi[], void>({
      query: () => 'todos',
      transformResponse: (response: ToDoApi[]) => {
        return response.slice(0, 5)
      },
    }),
  }),
})

export const { useGetPostsQuery } = todosApi

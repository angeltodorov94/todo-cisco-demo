import { useGetPostsQuery } from '../services/todosAPI'

const HomePage = () => {
  const { data, isLoading, isError } = useGetPostsQuery()

  const renderPosts = () =>
    data?.slice(0, 5).map((post) => <p key={post.id}>{post.title}</p>)

  return (
    <div>
      <h1>Home Page</h1>
      {isLoading && <p>Loading...</p>}
      {data && renderPosts()}
      {isError && <p>Something went wrong!!!</p>}
    </div>
  )
}

export default HomePage

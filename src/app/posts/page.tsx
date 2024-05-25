import PostLists from "../components/post-lists"
export default function Page() {
  
  return (
    <main className='text-center pt-32 px-5 min-h-[85vh]'>
        <h1 className='text-4xl md:text-5xl font-bold mb-5'>All posts</h1>
        <PostLists />
    </main>
  )
}


export default async function Id({ params }: { params:{id: string}}) {      
    await new Promise((resolve) => setTimeout(resolve, 100));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await res.json()
  return (
    <main className="text-center pt-[20px] px-5 min-h-screen">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="mt-5 p-1 font-normal border border-zinc-300 rounded-md bg-zinc-200">{post.body}</p>
    </main>
  )
}



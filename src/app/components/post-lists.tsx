import Link from "next/link";
import prisma from "@/lib/db";
export default async function PostLists() {
  const posts = await prisma.post.findMany()
  
  return (
    <main>
        <ul>
          {posts.map((post)=>{
            return <li key={post.id} className="mb-3 p-1 font-normal border border-zinc-300 rounded-md bg-zinc-200"><h4>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h4>
              </li> 
          })}
        </ul>
    </main>
  )
}

interface Post {
    id: number;
    title: string;
    body: string;
  }
  
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
export default async function Id({ params }: { params:{id: string}}) {      
    await new Promise((resolve) => setTimeout(resolve, 100));
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
    if (!post) {
        notFound();
    }
  return (
    <main className="text-center pt-[20px] px-5 min-h-screen">
      <h1 className="text-2xl font-semibold">{post.title}</h1>
      <p className="mt-5 p-1 font-normal border border-zinc-300 rounded-md bg-zinc-200">{post.body}</p>
    </main>
  )
}



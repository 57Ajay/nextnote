'use server'

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";


export default async function CreatePost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  try {
    await prisma.post.create({
      data: {
        title,
        body,
      },
    });

    revalidatePath("/posts");

  } catch (error) {
    console.error("Error creating post:", error);
    return new Response("Error creating post", { status: 500 });
  }
}

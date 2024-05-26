'use server'
export default async function CreatePost(formData : FormData){
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    console.log(title, body);
}
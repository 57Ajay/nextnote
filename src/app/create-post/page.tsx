
export default function CreatePostPage() {
  return (
    <main>
        <h1>Create Post</h1>
        <form>
            <label htmlFor="title">Title</label>
            <input title="title" type="text" />
            <label htmlFor="content">Content</label>
            <textarea title="content" />
            <button type="submit">Create Post</button>
        </form>
    </main>
    
  )
}

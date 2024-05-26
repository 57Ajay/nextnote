import CreatePost from '@/actions/action';
import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const CreatePostForm: React.FC = async () => {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())){
        redirect('/api/auth/login?post_login_redirect=/create-post')
    }
  return (
    <div className="max-w-[720px] mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden  min-h-[75vh]">
      <form action={CreatePost} className="p-6">
        <h2 className="text-lg text-center font-bold mb-4">Create a Post</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            name='title'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter a title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">body</label>
          <textarea
            name='body'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your body"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-10">Create Post</button>
      </form>
      <LogoutLink className="  flex-row bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 inline-block ml-7">Log out</LogoutLink>
    </div>
  );
};

export default CreatePostForm;

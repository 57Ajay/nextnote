import { getKindeServerSession, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import { Fragment } from 'react'

const Home = async () => {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <Fragment>
      <main className='text-center pt-32 px-5 min-h-[85vh]'>
        <h1 className='text-4xl md:text-5xl font-bold mb-5'>
          Welcome to my blog
        </h1>
        <p className='mx-auto mb-5 leading-5 p-8'>
        Hi there! I`m Ajay Upadhyay, a 21-year-old computer science and engineering student from Indore, Madhya Pradesh, India. With a passion for all things STEM, I delve into the fascinating worlds of science, technology, engineering, and mathematics. My blog is a space where I share my journey through the ever-evolving landscape of technology, offering insights, tutorials, and musings on the latest trends and innovations. Join me as I explore the frontiers of computing and engineering, and let`s learn and grow together in this exciting digital era.
        </p>
        {!(await isAuthenticated()) ? 
        <LoginLink className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-10">Login</LoginLink> :
         <LogoutLink className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mb-10">Logout</LogoutLink>}
      </main>
    </Fragment>
  );
};

export default Home;

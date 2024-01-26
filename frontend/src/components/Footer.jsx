import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
{/* <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 ">
       <div className="flex flex-col text-white">
         <p>Featured Blogs</p>
         <p>Most viewed</p>
         <p>Readers Choice</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Forum</p>
         <p>Support</p>
         <p>Recent Posts</p>
       </div>

       <div className="flex flex-col text-white">
         <p>Privacy Policy</p>
         <p>About Us</p>
         <p>Terms & Conditions</p>
         <p>Terms of Service</p>
       </div>
    </div>
    <p className="py-2 pb-6 text-center text-white bg-black text-sm">©️ All rights reserved</p> */}
    {/* <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8 "> */}
    <div className='bg-black p-2'>
      <a className='text-slate-200 flex flex-col items-center justify-center text-center mt-4 mb-4 text-2xl'>Gaurav Kumar Kashyap</a>
      <div className='flex items-center justify-center space-x-4 '>
        <a className='text-white text-xl' href="https://www.linkedin.com/in/gauravkrk/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a className='text-white p-2 text-xl' href="https://github.com/gauravk-k" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div>
        <small className='text-gray-500 flex flex-col items-center justify-center p-2 text-sm'>&copy; GKK 2024. All rights reserved.</small>
      </div>

      </div>

    </>
    
  )
}

export default Footer
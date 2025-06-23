import React from 'react'

import img1 from "../assets/ems.png";
import img2 from "../assets/chhathpuja.png";
import img3 from "../assets/foodorder.png";


const Mainbody = () => {

   const projects = [
    {
      title: 'Employee Task Managing App',
      imageSrc: img1,
      link: 'https://github.com/US7103/emp_mang_sys',
      tink: 'US7103/EMP_MANG_SYS'
    },
    {
      title: 'Food Ordering App',
      imageSrc: img3,
      link: 'https://github.com/US7103/restaurant_food',
      tink: 'US7103/RESTAURANTFOOD'
    },
    {
      title: 'Chhath Puja Guidlines App',
      imageSrc: img2,
      link: 'https://github.com/US7103/chhathpuja',
      tink: 'US7103/CHHATHPUJA'
    },
  ];



  return (
    // <div className='pt-5 justify-between flex flex-wrap flex-col items-center  gap-6 bg-black'>
    <div className='pt-5 flex flex-col items-center gap-6 bg-black'>

      {/* <div className='p-8  w-full h-72'> */}
      <div className='p-4 w-full md:w-4/5'>

      <div className=' rounded-3xl bg-zinc-600 text-white w-full h-full'>
      <h1 className=' underline text-2xl text-center mt-1'>About me</h1>
      <p className=' m-1 tracking-tighter text-lg'>
        Hi, I'm Utkarsh Savarn, a passionate and curious learner currently pursuing my B.Tech in Information Technology at Ajay Kumar Garg Engineering College, Ghaziabad. I'm a proud member of the 2022–2026 batch and stepping into my final year with great enthusiasm for tech and innovation.
        Over the past few years, I’ve developed a solid foundation in full-stack web development, especially with the MERN stack (MongoDB, Express.js, React.js, and Node.js). I'm constantly building and refining projects that blend creativity with functionality.
        Alongside web development, I’m also exploring the world of Machine Learning. I'm currently getting hands-on with tools like Scikit-learn and OpenCV, laying the groundwork for deeper dives into intelligent systems and computer vision.
        When it comes to programming, I enjoy writing code in C++, JavaScript, and Python, each bringing its own flavor to problem-solving and development.Languages are another passion of mine. I’m fluent in Hindi, English, Punjabi, and Bhojpuri, and I've also started picking up a bit of German—just enough to spark a conversation!
        I’m always looking forward to learning, collaborating, and growing in this ever-evolving tech journey. Whether it’s through code, data, or design—I love turning ideas into reality.
      </p>
      </div>
      </div>


   {/* <div className=' mb-2 text-xl px-2 py-3 bg-zinc-800 rounded-md text-cyan-400 w-1/5 text-center '> */}
   <div className='text-xl px-4 py-3 bg-zinc-800 rounded-md text-cyan-400 w-full sm:w-auto text-center'>

   <h1>My Projects</h1>
   <a className=' text-red-600 underline' href="/Utkarsh_Savarn_Resume.pdf">Download the Resume</a>
   
   </div>
    {/* <div className=' mb-4 justify-center flex flex-row'> */}
    <div className='flex flex-wrap justify-center gap-6 px-4 mb-6 w-full'>

      {
      projects.map((user,idx)=>(
      
        <div key={idx} className='  mx-3 pb-5 tracking-tight rounded-xl h-[23rem] w-72 bg-zinc-700 text-cyan-400'>
      <img className=' w-full object-fill rounded-t-xl h-[17rem]' src={user.imageSrc} alt="" />
      <h1 className=' text-xl tracking-tighter'>{user.title}</h1>
      <h5>Go to Project:</h5>
     <a className="flex flex-row items-center text-lg underline" href={user.link} >
    <img className="h-5 w-5" src="/maximize.png" alt="Open" />
    <p className=" overflow-hidden break-words">{user.tink}</p>
    </a>

      </div>
      
      ))
    }

    </div>

    
    </div>
  )
}
 
    
   
export default Mainbody
           
                  
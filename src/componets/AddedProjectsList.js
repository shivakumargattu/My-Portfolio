// AddedProjectsList.js
import React from 'react';

const AddedProjectsList = ({ addedProjects }) => {
  return (
    <div className="mt-6">
      <h1 id="#projects" className="text-4xl underline underline-offset-4 decoration-yellow-400 font-bold mb-2">Projects</h1>

     
      <div className=" text-gray-500 bg-white p-4 rounded m-10">
      <div className="max-w-5xl mx-auto py-5 lg:flex lg:items-center">
        {/* Left div with text */}
        <div className="lg:w-1/2 py-20 lg:mr-8">
          <h1 className="text-4xl text-gray-700 font-bold mb-4"> Magic Bus</h1>
          <p className="text-lg mb-6">
            
          Magic Bus is one of the top five NGOs in the education and skilling space in India. Founded in Mumbai in 1999, we have grown into an organisation with a pan-India presence. Magic Bus works with young people living in poverty, taking them from a childhood full of challenges to a life with meaningful livelihoods. We work with young people's ecosystems (parents, peers, community, and local institutions) to create a network of support for them.
          </p>
          
    <a href='https://magicbus.vercel.app/' >    <button className="bg-white text-black px-6 py-2 mx-4 border-2 border-black  rounded font-bold hover:bg-blue-100">
          View Project
        </button></a>
        </div>

        {/* Right div with image */}
        <div className="lg:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            src="https://i.ibb.co/PMBzHtB/React-App-Google-Chrome-26-01-2024-04-52-55.png" alt="React-App-Google-Chrome-26-01-2024-04-52-55"
          />
        </div>
      </div>
    </div>

    <div className=" text-gray-500 bg-white p-4 flex-wrap-reverse rounded m-10 ">
      <div className="max-w-5xl mx-auto py-5 lg:flex lg:items-center">
        {/* Left div with text */}
        <div className="lg:w-1/2">

<img src="https://i.ibb.co/Zf3nwD0/React-App-Google-Chrome-26-01-2024-05-11-09.png" alt="React-App-Google-Chrome-26-01-2024-05-11-09" />

          
        </div>

        <div className="lg:w-1/2 py-20 lg:mr-8">
        
          <h1 className="text-4xl text-gray-700 font-bold mb-4"> My Friend Info Solustion </h1>
          <p className="text-lg mb-6">
            My friends info solution this web site develped by me using these technologies  HTML, CSS, JavaScript, React.js, Node.js, Express.js, Tailwind CSS, and MongoDB, with a passion for crafting seamless and efficient web experiences.

          </p>
          
       <a href='https://myfriendinfo.vercel.app/'> <button className="bg-white text-black px-6 py-2 mx-4 border-2 border-black  rounded font-bold hover:bg-blue-100">
          View Project
        </button></a>
        </div>

        {/* Right div with image */}
        
      </div>
    </div>


    <div className=" text-gray-500 bg-white p-4 rounded m-10 ">
      <div className="max-w-5xl mx-auto py-5 lg:flex lg:items-center">
        {/* Left div with text */}
        <div className="lg:w-1/2 py-20 lg:mr-8">
          <h1 className="text-4xl text-gray-700 font-bold mb-4"> Self drive cars </h1>
          <p className="text-lg mb-6">
            
In This Project  mostly used technologirs are HTML, CSS, JavaScript, Reacjs Tailwind CSS, and MongoDB, with a passion for crafting seamless and efficient web experiences.

          </p>
          
        <button className="bg-white text-black px-6 py-2 mx-4 border-2 border-black  rounded font-bold hover:bg-blue-100">
          View Project
        </button>
        </div>

        {/* Right div with image */}
        <div className="lg:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            src="https://media.istockphoto.com/id/1349375133/photo/handsome-stylish-japanese-businessman-in-glasses-reading-notebook-and-watching-news-on.jpg?s=612x612&w=0&k=20&c=Ht-307LVsjoLoYHMDl0oavcsM_NILbcTS4N3831mLts="
            alt="logo"
          />
        </div>
      </div>
    </div>


      {addedProjects.length === 0 ? (
        <p> add More projectjs.</p>
      ) : (
        <ul>
          {addedProjects.map((project, index) => (
            

            <div key={index} className=" text-gray-500 border-gray-500 bg-white rounded-4 py-8 mx-8 ">
      <div className="max-w-5xl mx-auto py-10 lg:flex lg:items-center">
        {/* Left div with text */}
        <div className="lg:w-1/2 py-20 lg:mr-8">
       
          <h1 className="text-4xl text-gray-700 font-bold mb-4">{project.name}</h1>
          <p className="text-lg mb-6">{project.description}
          </p>
          
       <a href={project.link}> <button   className="bg-white text-black px-6 py-2 mx-4 border-2 border-black  rounded font-bold hover:bg-blue-100">
          View Project
        </button>
        </a>
        </div>

        {/* Right div with image */}
        <div className="lg:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            src={project.image}
            alt="imge"
          />
        </div>
      </div>
    </div>

          ))}
        </ul>
      )}
    </div>
    
  );
};

export default AddedProjectsList;

import React from 'react'

const About = () => {
  return (
    <>
    <div name="about"
    className='w-full text-gray-500 py-10 px-5 bg-slate-100	'
    >
    <h1 className="text-4xl text-gray-700 text-center underline underline-offset-4 decoration-yellow-400 font-bold mb-2">About</h1>
      
        
    
<p className='text-white-800  px-4 w-full  '>
</p>
      </div>
    
      <div className=" text-gray-500">
      <div className="max-w-5xl mx-auto lg:flex lg:items-center">
        {/* Left div with text */}
        
        <div className="lg:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            src="https://media.istockphoto.com/id/1150342651/photo/software-developers-at-the-office.jpg?s=1024x1024&w=is&k=20&c=bz4YHYHYJUtxTrVjeSf7OSx-mr6_SBEhX1EPnYX8t7o="
            alt="Developer"
          />
        </div>

        {/* Right div with image */}
       
        
        <div className="lg:w-1/2 py-2 px-6 lg:mr-8">
          <p className="text-md mb-6">
          My journey extends beyond the front-end horizon into the world of backend technologies. With Node.js and Express.js, I've constructed robust and high-performing server-side applications. I'm well-versed in the art of databases, proficiently managing data using SQL and SQLite. My toolkit also embraces Python, a versatile asset that amplifies the interactivity and dynamism of my projects. Embracing a culture of continuous learning, I'm actively engaged in the NextWave CCBP program, eagerly absorbing new skills and knowledge that amplify my capabilities, and empower me to forge innovative solutions.
Embarking on a path of constant growth, I thrive on the dynamic nature of web development. 
My evolution is a testament to my resilience, dedication, and unyielding passion for knowledge.I'm poised to make an indelible mark in web development and beyond. As I embrace new challenges and contribute to the ever-evolving tech landscape, my journey becomes an exciting narrative of innovation, impact, and transformative solutions.

          </p>
        </div>
      </div>
    </div>



  </>  
  )
}

export default About
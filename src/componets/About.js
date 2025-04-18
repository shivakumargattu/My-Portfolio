import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full bg-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-gray-700 text-center underline underline-offset-4 decoration-yellow-400 font-bold mb-12">
          About Me
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2">
            <img
              className="w-full h-auto rounded-lg shadow-xl"
              src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Developer"
            />
          </div>
          
          <div className="lg:w-1/2">
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a Full Stack Developer with expertise in modern web technologies. My journey extends beyond 
              the front-end horizon into the world of backend technologies. With Node.js and Express.js, 
              I've constructed robust and high-performing server-side applications.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              I'm well-versed in database management, proficiently handling data using SQL and MongoDB. 
              My toolkit also embraces Python, a versatile asset that amplifies the interactivity and 
              dynamism of my projects.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Embracing a culture of continuous learning, I'm actively engaged in expanding my skillset 
              to create innovative solutions. My evolution is a testament to my resilience, dedication, 
              and unyielding passion for technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
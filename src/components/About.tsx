// src/App.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    
    <section
  id="about"
  className="bg-linear-to-r from-gray-200 to-gray-400 p-6 rounded-lg min-h-screen flex flex-col sm:flex-row justify-center items-center text-center sm:text-left px-4"
  data-aos="fade-up"
>
  {/* <!-- Profile Image (Larger and Separate from Text) --> */}
  <img
    src="/src/assets/profile.jpeg"
    alt="Profile"
    className="w-52 h-52 rounded-full mb-6 sm:mb-0 sm:mr-16 shadow-lg object-cover flex-shrink-0"
  />

  {/* <!-- Text Section (Takes Remaining Space) --> */}
  <div className="sm:max-w-2xl text-lg leading-relaxed text-gray-800">
    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      About Me
    </h2>
    <p>
      I’m a Digital Media Engineering graduate with a strong foundation in technology and engineering. While my academic background is technical, I’ve always had a deep passion for art and creativity. 
      <br /><br />
      I see AI as a way to merge these two worlds, using technology to create systems that can learn, adapt, and even perceive. This intersection of innovation and creative thinking is what motivates me to explore AI and its potential.
      <br /><br />
      I’m currently seeking <span className="font-semibold">AI-related work </span>or research opportunities to gain hands-on experience while preparing for a <span className="font-semibold">Master’s degree</span> in Artificial Intelligence or Computer Vision. My goal is to continue exploring the possibilities of AI and how it can create meaningful impact through both innovation and design.
      <br /><br />
      {/* If you’re working on something exciting in AI or looking for collaborators, feel free to reach out. I’d love to connect and learn more! */}
    </p>
  </div>
</section>

//     <section
//       id="about"
//       className="bg-linear-to-r from-gray-200 to-gray-400 p-6 rounded-lg min-h-screen flex flex-col justify-center items-center text-center px-4"
//       data-aos="fade-up"
//     >
//       <img
//         src="/src/assets/profile.jpeg"
//         alt="Profile"
//         className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
//       />
//       <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//         About Me
//       </h2>
// <p className="max-w-2xl text-lg leading-relaxed text-gray-800">
//   I’m a Digital Media Engineering graduate with a strong foundation in <strong className="text-black font-semibold">technology</strong> and <strong className="text-black font-semibold">engineering</strong>. While my academic background is technical, I’ve always had a deep passion for <strong className="text-black font-semibold">art</strong> and creativity. I see <strong className="text-black font-semibold">AI</strong> as a way to merge these two worlds, using technology to create systems that can learn, adapt, and even perceive. This intersection of <strong className="text-black font-semibold">innovation</strong> and <strong className="text-black font-semibold">creative thinking</strong> is what motivates me to explore AI and its potential.
//   <br /><br />
//   I’m currently seeking <strong className="text-black font-semibold">AI-related work or research opportunities</strong> to gain hands-on experience while preparing for a <strong className="text-black font-semibold">Master’s degree</strong> in Artificial Intelligence or Computer Vision. My goal is to continue exploring the possibilities of AI and how it can create meaningful impact through both <strong className="text-black font-semibold">innovation</strong> and <strong className="text-black font-semibold">design</strong>.
//   <br /><br />
//   If you’re working on something exciting in AI or looking for collaborators, feel free to reach out. I’d love to connect and learn more!
// </p>


//     </section>
      
  );
};

export default About;

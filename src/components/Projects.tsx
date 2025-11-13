// src/App.tsx
import React from 'react';

const Projects: React.FC = () => {
   const projects = [
    {
      title: "Real-Time Facial Animation on Robot Head",
      img: "/src/assets/project1.jpeg",
      desc: "A real-time system that captures and translates human facial expressions into lifelike animations on a robot head.",
      link: "https://github.com/yaraeslamm/bachelor_thesis.git",
      sample: "/src/assets/vid1.mp4"
    },
    {
      title: "Medical Image Segmentation – Tumor Detection",
      img: "/src/assets/project2.jpeg",
      desc: "Applied deep learning to segment brain tumors in MRI scans using CNN and Feedforward Neural Network models.",
      link: "https://github.com/yaraeslamm/Medical_Segmentation.git"
    },
    {
      title: "Foreground Detection & Image Binarization",
      img: "/src/assets/project3.jpeg",
      desc: "Used classical computer vision for motion and image analysis, including running average and EM algorithms.",
      link: "https://github.com/yaraeslamm/foreground-detection-and-image-binarization.git"
    },
    {
      title: "Motion Analysis with MEI & MHI",
      img: "/src/assets/MhiMei.gif",
      desc: "Tracks and analyzes motion using Motion Energy and History Images to capture direction and intensity.",
      link: "https://github.com/yaraeslamm/Motion_Analysis.git",
      gifOne:"/src/assets/mei.gif",
      gifTwo:"/src/assets/mhi.gif"
    },
  ];
    return (
    <section
      id="projects"
      className="rounded-lg shadow-lg mb-8 bg-neutral-200 min-h-screen flex flex-col justify-center items-center text-center px-4 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl mt-8 font-bold mb-12 text-teal-900">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-4">
            
            <img src={p.img} alt={p.title} className="rounded-lg mb-4 w-full h-40 object-contain" />
                      {/* Only render the GIF for a specific project */}
          {p.title === "Motion Analysis with MEI & MHI"  && (
             <div className="flex flex-col gap-4">
            <img
              src={p.gifOne} // Assuming there's a 'gif' key in the object for the GIF source
              alt="GIF"
              className="rounded-lg mb-4 w-auto h-auto object-contain w-[100px]"
            />
                  <img
        src={p.gifTwo}
        alt="GIF 2"
        className="rounded-lg mb-4 w-auto h-auto object-contain w-[100px]"
      />
    </div>
            
            
          )}</div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{p.desc}</p>

            <a
              href={p.link}
              target="_blank"
              className="hover:underline flex items-center gap-2 px-4 py-2 bg-neutral-200 text-black rounded-full hover:bg-gray-500 transition duration-300"
            >
              <img src="/src/assets/github.svg" alt="GitHub" className="w-5 h-5" />
              View Repository
            </a>

            {p.sample && (
              <a href={p.sample} 
              target="_blank" 
              className="hover:underline flex items-center gap-2 px-4 py-2 bg-neutral-200 text-black rounded-full hover:bg-gray-500 transition duration-300">
                <br></br>
                <img src="/src/assets/sample.png" alt="sample" className="w-5 h-5" />
                Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

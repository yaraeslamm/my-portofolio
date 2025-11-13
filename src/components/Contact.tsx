// src/App.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
//        <section
//       id="contact"
//       className="bg-linear-to-r from-gray-300 to-gray-400 min-h-screen flex flex-col justify-center items-center text-center px-4"
//       data-aos="fade-up"
//     >
//     <div className="flex flex-wrap justify-center gap-4 mt-8">
//       If you’re working on something exciting in AI or looking for collaborators, feel free to reach out. I’d love to connect and learn more!
//   <a href="/src/assets/Yara Elshehawi.pdf" target="_blank"
//     className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
//     View CV
//   </a>
  
//   <a href="/src/assets/Yara Elshehawi.pdf" download
//     className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
//     Download CV
//   </a>
// </div>

// <div className="flex justify-center gap-6 mt-8">
//   <a href="https://github.com/yaraeslamm" target="_blank">
//     <img src="/src/assets/github.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="GitHub" />
//   </a>
//   <a href="https://www.linkedin.com/in/yaraelshehawi" target="_blank">
//     <img src="/src/assets/linkedin.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="LinkedIn" />
//   </a>
//   <a href="https://huggingface.co/yaraeslamm" target="_blank">
//     <img src="/src/assets/huggingface.jpeg" className="w-8 h-8 hover:scale-110 transition-transform" alt="Hugging Face" />
//   </a>
// </div>

//     </section>



/* <section
  id="contact"
  className="bg-linear-to-r from-gray-300 to-gray-400 min-h-screen flex flex-col justify-center items-center text-center px-4"
  data-aos="fade-up"
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
    Reach Out & Let's Collaborate
  </h2>

  <p className="text-lg sm:text-xl max-w-3xl mb-6">
    If you’re working on something exciting in AI or looking for collaborators, feel free to reach out. I’d love to connect and learn more!
  </p>

  
  <div className="flex justify-center gap-8 mb-8">
    
    <a href="/src/assets/Yara Elshehawi.pdf" target="_blank"
      className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img src="/src/assets/view-icon.png" alt="View CV" className="w-6 h-6 mr-2" />
      View CV
    </a>
  
    
    <a href="/src/assets/Yara Elshehawi.pdf" download
      className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img src="/src/assets/download-icon.svg" alt="Download CV" className="w-6 h-6 mr-2" />
      Download CV
    </a>
  </div>

  
  <div className="mt-8 mb-8">
    <a href="mailto:your-email@example.com?subject=Let's%20Collaborate!" 
      className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img src="/src/assets/email-icon.svg" alt="Send Email" className="w-6 h-6 mr-2" />
      Send an Email
    </a>
  </div>

  
  <div className="flex justify-center gap-6 mt-8">
    <a href="https://github.com/yaraeslamm" target="_blank">
      <img src="/src/assets/github.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/yaraelshehawi" target="_blank">
      <img src="/src/assets/linkedin.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="LinkedIn" />
    </a>
    <a href="https://huggingface.co/yaraeslamm" target="_blank">
      <img src="/src/assets/huggingface.jpeg" className="w-8 h-8 hover:scale-110 transition-transform" alt="Hugging Face" />
    </a>
  </div>
</section> */

<section
  id="contact"
  className="bg-linear-to-r from-gray-300 to-gray-400 min-h-screen flex flex-col justify-center items-center text-center px-4"
  data-aos="fade-up"
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
    Reach Out & Let's Collaborate
  </h2>

  <p className="text-lg sm:text-xl max-w-3xl mb-6">
    If you’re working on something exciting in AI or looking for collaborators, feel free to reach out. I’d love to connect and learn more!
  </p>

  {/* <!-- CV Buttons Group --> */}
  <div className="flex justify-center gap-8 mb-8">
    {/* <!-- View CV Button with Icon --> */}
    <a href="/src/assets/Yara Elshehawi.pdf" target="_blank"
      className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img src="/src/assets/view-icon.png" alt="View CV" className="w-6 h-6 mr-2" />
      View CV
    </a>
  
    {/* <!-- Download CV Button with Icon --> */}
    <a href="/src/assets/Yara Elshehawi.pdf" download
      className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img src="/src/assets/download-icon.svg" alt="Download CV" className="w-6 h-6 mr-2" />
      Download CV
    </a>
  </div>

  {/* <!-- Send Email Button with Icon --> */}
  <div className="mt-8 mb-8">
    <a href="mailto:your-email@example.com?subject=Let's%20Collaborate!" 
      className="inline-flex items-center px-8 py-4 border-2 bg-teal-900 border-teal-900 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
      <img src="/src/assets/email-icon.svg" alt="Send Email" className="w-6 h-6 mr-2" />
      Send an Email
    </a>
  </div>

  {/* <!-- Social Media Heading --> */}
  <div className="mt-8 mb-4">
    <h3 className="text-xl sm:text-2xl font-semibold text-teal-900">
      Connect with Me
    </h3>
  </div>

  {/* <!-- Social Media Links --> */}
  <div className="flex justify-center gap-6 mt-8">
    <a href="https://github.com/yaraeslamm" target="_blank">
      <img src="/src/assets/github.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/yara-eslam-877421212" target="_blank">
      <img src="/src/assets/linkedin.svg" className="w-8 h-8 hover:scale-110 transition-transform" alt="LinkedIn" />
    </a>
    <a href="https://huggingface.co/yara11" target="_blank">
      <img src="/src/assets/huggingface.jpeg" className="w-8 h-8 hover:scale-110 transition-transform" alt="Hugging Face" />
    </a>
  </div>
</section>


  );
};

export default Contact;

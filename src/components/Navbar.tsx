import React from 'react';

const Navbar: React.FC = () => {
  // Scroll handler to find and scroll to the section
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get the section ID from the data-section attribute
    const sectionId = e.currentTarget.getAttribute('data-section');
    
    // If we find the section, scroll to it
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-linear-to-r from-teal-950 to-teal-900 p-6 rounded-lg backdrop-blur-md shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 text-sm md:text-base">
        <h1 className="text-4xl font-serif font-medium text-white">Yara Elshehawi</h1>
        <div className="space-x-6">
          <button
            className="px-3 py-2 cursor-pointer rounded-md bg-transparent border border-white/50 text-white hover:bg-white hover:text-teal-900 transition duration-300 font-serif"
            data-section="about" // Add data-section to each button
            onClick={handleScroll}
          >
            About
          </button>
          <button
            className="px-3 py-2 cursor-pointer rounded-md bg-transparent border border-white/50 text-white hover:bg-white hover:text-teal-900 transition duration-300 font-serif"
            data-section="projects"
            onClick={handleScroll}
          >
            Projects
          </button>
          <button
            className="px-3 py-2 cursor-pointer rounded-md bg-transparent border border-white/50 text-white hover:bg-white hover:text-teal-900 transition duration-300 font-serif"
            data-section="skills"
            onClick={handleScroll}
          >
            Skills
          </button>
          <button
            className="px-3 py-2 cursor-pointer rounded-md bg-transparent border border-white/50 text-white hover:bg-white hover:text-teal-900 transition duration-300 font-serif"
            data-section="contact"
            onClick={handleScroll}
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

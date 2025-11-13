// src/App.tsx
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
 {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "OpenCV", "MediaPipe", "Scikit-learn", "LangChain","Hugging Face Agents"]
  },
  {
    title: "Computer Vision",
    skills: ["Image Segmentation", "Feature Extraction", "Real-Time Facial Tracking"]
  },
  {
    title: "Data Engineering & Deployment",
    skills: ["NumPy", "Pandas", "Docker", "AWS", "Model Deployment"]
  },
  {
    title: "Tools & Frameworks",
    skills: ["Git & GitHub", "Jupyter", "Streamlit", "Node.js", "React", "Tailwind CSS"]
  }
];

  return (
<section
  id="skills"
  className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-neutral-200"
  data-aos="fade-up"
>
  <h2 className="text-4xl font-bold mb-12 text-teal-900">Skills</h2>

  <div className="flex flex-col gap-8 w-full max-w-4xl">
    {skillCategories.map((category) => (
      <div
        key={category.title}
        className="bg-white border-2 border-teal-900 rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl"
      >
        <h3 className="text-2xl font-semibold mb-4 text-teal-900 border-b-2 border-teal-900 pb-2">
          {category.title}
        </h3>

        <ul className="flex flex-wrap gap-3 mt-3">
          {category.skills.map((skill) => (
            <li
              key={skill}
              className="px-4 py-1.5 bg-teal-900 text-white rounded-full text-sm font-medium transition-colors duration-200 hover:bg-teal-800"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>
  );
};

export default Skills;

import React from 'react';
import Marquee from 'react-fast-marquee';
import { SiReact, SiNextdotjs, SiExpo, SiTailwindcss, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiPhp, SiPython, SiDjango, SiFlask, SiAppwrite, SiMysql, SiPostgresql, SiGit, SiGithub, SiFigma, SiVercel, SiNetlify } from 'react-icons/si';

const TechStackMarquee = () => {
  const techStack = [
    { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
    // { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'React Native (Expo)', icon: <SiExpo className="text-black dark:text-white" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    // { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
    // { name: 'Express.js', icon: <SiExpress className="text-black dark:text-white" /> },
    { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" /> },
    { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
    // { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
    { name: 'Flask', icon: <SiFlask className="text-black dark:text-white" /> },
    { name: 'Appwrite', icon: <SiAppwrite className="text-[#FD366E]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    // { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
    { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" /> },
    { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7]" /> }
  ];

  return (
    <div className="my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">My Technical Experience/Skills.</h2>
      
      {/* Frontend Marquee */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 ml-4">Frontend:</h3>
        <Marquee speed={50} pauseOnHover gradient={false} className="py-4">
          {techStack.slice(0, 6).map((tech, index) => (
            <div key={index} className="flex flex-col items-center mx-6 px-4 py-3 bg-white  rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      
      {/* Backend Marquee */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 ml-4">Backend:</h3>
        <Marquee speed={45} pauseOnHover gradient={false} className="py-4" direction="right">
          {techStack.slice(6, 12).map((tech, index) => (
            <div key={index} className="flex flex-col items-center mx-6 px-4 py-3 bg-white  rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
      
      {/* Tools Marquee */}
      <div>
        <h3 className="text-lg font-semibold mb-4 ml-4">Other Tools:</h3>
        <Marquee speed={40} pauseOnHover gradient={false} className="py-4">
          {techStack.slice(13).map((tech, index) => (
            <div key={index} className="flex flex-col items-center mx-6 px-4 py-3 bg-white  rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{tech.icon}</div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStackMarquee;
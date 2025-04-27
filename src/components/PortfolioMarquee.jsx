import Marquee from "react-fast-marquee";
import project_1 from "../assets/project-1.png"
import project_2 from "../assets/project-2.png"
import project_3 from "../assets/project-3.png"
import project_4 from "../assets/project-4.png"
import project_5 from "../assets/project-5.png"
import project_6 from "../assets/project-6.png"
import project_7 from "../assets/project-7.png"

function PortfolioMarquee() {
  return (
    <div className="my-12 absolute md:top-[17cm] top-[12cm]  w-full overflow-hidden  p-4">
      <Marquee speed={50} pauseOnHover gradient={false} className="py-8">
  {[ project_1, project_2, project_3, project_4, project_5, project_6,project_7 ].map((img, index) => (
    <div 
      key={index} // Don't forget the key prop
      className="transition-transform duration-500 hover:scale-105 relative mx-3 w-[12.5cm] h-[18rem] flex items-center justify-center bg-gray-50 rounded-3xl p-[2rem]  "
    >
      {/* Corner dots - more subtle */}
      <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-gray-400/80"></div>
      <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-gray-400/80"></div>
      <div className="absolute bottom-5 left-5 w-2 h-2 rounded-full bg-gray-400/80"></div>
      <div className="absolute bottom-5 right-5 w-2 h-2 rounded-full bg-gray-400/80"></div>
      
        <img 
          src={img} 
          alt={`Project ${index + 1}`}
          className="w-full h-full object-contain shadow-2xl  rounded-3xl"
        />
        
    </div>
  ))}
</Marquee>
    </div>
  );
}
export default PortfolioMarquee
import Marquee from "react-fast-marquee";
import avatar from "../assets/avatar.png"
import project_1 from "../assets/project-1.png"
import project_2 from "../assets/project-2.png"

function PortfolioMarquee() {
  return (
    <div className="my-12 absolute md:top-[17cm] top-[12cm]  w-full overflow-hidden  p-4">
      <Marquee speed={40} pauseOnHover gradient={false}>
        {[avatar, project_1, project_2, project_1].map((img, index) => (
          <div key={index} className="mx-4 w-[350px] h-[200px] overflow-hidden rounded-lg shadow-lg p-2">
            <img 
              src={img} 
              alt={`Project ${index + 1}`} 
              className="w-full h-full object-full hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
export default PortfolioMarquee
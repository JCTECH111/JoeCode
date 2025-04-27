import Marquee from "react-fast-marquee";
import avatar from "../assets/avatar.png"

function PortfolioMarquee() {
  return (
    <div className="my-12 absolute md:top-[17cm] top-[12cm]  w-full overflow-hidden  p-4">
      <Marquee speed={40} pauseOnHover gradient={false}>
        {[avatar, avatar, avatar, avatar].map((img, index) => (
          <div key={index} className="mx-4 w-[300px] h-[180px] overflow-hidden rounded-lg shadow-lg p-4">
            <img 
              src={img} 
              alt={`Project ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
export default PortfolioMarquee
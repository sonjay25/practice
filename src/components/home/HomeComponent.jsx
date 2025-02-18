import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Linkedin, Github, Facebook, Instagram } from "lucide-react";
import itachi from "../../assets/th.jpeg";

function HomeComponent() {
  const typedRef = useRef(null);

  useEffect(() => {
    const type = new Typed(typedRef.current, {
      strings: ["Jayson Urquiola", "Software Engineer", "I have no experience but I'm willing to learn"],
      showCursor: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 150,
      loop: true,
    });
    return () => type.destroy();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img className="rounded-full shadow-md border-4 border-gray-300 w-40 h-40 object-cover" src={itachi} alt="Profile" />
        </div>
        
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left mt-6 md:mt-0 md:ml-8">
          <h1 className="text-lg font-semibold uppercase tracking-widest text-gray-600">Software Developer</h1>
          <h2 className="text-4xl font-bold text-blue-600 mt-2">
            Hello, I'm <span ref={typedRef}></span>
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Passionate about learning and growing in the field of software engineering. Excited to explore new technologies and contribute to meaningful projects.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {[
              { Icon: Linkedin, link: "https://www.linkedin.com/in/jayson2596", hover: "hover:text-blue-600" },
              { Icon: Github, link: "https://github.com/jayson2596", hover: "hover:text-gray-700" },
              { Icon: Facebook, link: "https://facebook.com/jayson2596", hover: "hover:text-blue-500" },
              { Icon: Instagram, link: "https://instagram.com/jayson2596", hover: "hover:text-pink-500" },
            ].map(({ Icon, link, hover }, idx) => (
              <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors duration-300 ease-in-out transform hover:scale-110">
                <Icon className={`w-7 h-7 ${hover}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

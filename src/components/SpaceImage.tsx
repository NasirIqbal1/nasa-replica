import React, { useState } from 'react';
import { Calendar, Info } from 'lucide-react';

interface SpaceImageProps {
  title: string;
  date: string;
  explanation: string;
  imageUrl: string;
}

const SpaceImage: React.FC<SpaceImageProps> = ({ title, date, explanation, imageUrl }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="relative bg-black py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Astronomy Picture of the Day</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured.
          </p>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 h-80 md:h-96 lg:h-auto relative overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setShowInfo(!showInfo)}
                className="absolute bottom-4 right-4 bg-slate-900/70 hover:bg-slate-800 p-2 rounded-full text-white transition-colors"
              >
                <Info size={20} />
              </button>
            </div>
            
            <div className={`lg:w-1/3 p-6 transition-all duration-500 ${showInfo ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 lg:translate-y-0 lg:opacity-100'} lg:transform-none`}>
              <div className="mb-4 flex items-center text-gray-400 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              
              <p className="text-gray-300 text-sm">
                {explanation.length > 200 
                  ? `${explanation.substring(0, 200)}...` 
                  : explanation
                }
              </p>
              
              <div className="mt-6">
                <a 
                  href="#full-details" 
                  className="text-[#FC3D21] hover:text-white text-sm font-medium transition-colors"
                >
                  Read full explanation
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#archive" 
            className="inline-block text-white hover:text-[#FC3D21] font-medium transition-colors"
          >
            Browse image archive
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpaceImage;
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Mission {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const MissionHighlights: React.FC = () => {
  const missions: Mission[] = [
    {
      id: 1,
      title: 'Mars Perseverance Rover',
      description: 'Seeking signs of ancient life and collecting samples of rock and regolith for a possible return to Earth.',
      imageUrl: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#mars-perseverance'
    },
    {
      id: 2,
      title: 'Artemis Program',
      description: 'NASA\'s program to return humans to the Moon by 2024, including the first woman and the next man.',
      imageUrl: 'https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#artemis'
    },
    {
      id: 3,
      title: 'James Webb Space Telescope',
      description: 'The largest, most powerful and complex space telescope ever built and launched into space.',
      imageUrl: 'https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#jwst'
    },
    {
      id: 4,
      title: 'International Space Station',
      description: 'A modular space station in low Earth orbit. It\'s a multinational collaborative project.',
      imageUrl: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '#iss'
    }
  ];

  return (
    <section className="bg-slate-900 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">Mission Highlights</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore NASA's current missions and discoveries that are shaping our understanding of space and our place in it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission) => (
            <div 
              key={mission.id} 
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={mission.imageUrl} 
                  alt={mission.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{mission.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{mission.description}</p>
                <a 
                  href={mission.link} 
                  className="inline-flex items-center text-[#FC3D21] hover:text-white transition-colors"
                >
                  <span className="mr-1">Learn more</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#all-missions" 
            className="inline-block border-2 border-[#FC3D21] text-[#FC3D21] hover:bg-[#FC3D21] hover:text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            View All Missions
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionHighlights;
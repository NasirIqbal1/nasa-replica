import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'NASA\'s Perseverance Mars Rover Makes Surprising Discovery',
      date: 'June 15, 2025',
      category: 'Mars',
      excerpt: 'The rover has found evidence that could change our understanding of the Red Planet\'s history and potential for supporting life.',
      imageUrl: 'https://images.pexels.com/photos/586030/pexels-photo-586030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'James Webb Space Telescope Captures Breathtaking Nebula Images',
      date: 'June 12, 2025',
      category: 'Astronomy',
      excerpt: 'The James Webb Space Telescope has delivered its sharpest images yet of distant nebulae, revealing unprecedented details about star formation.',
      imageUrl: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Astronauts Complete Critical Spacewalk on International Space Station',
      date: 'June 10, 2025',
      category: 'ISS',
      excerpt: 'Two astronauts spent more than seven hours outside the station installing new solar arrays to boost power generation capabilities.',
      imageUrl: 'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Latest NASA News</h2>
            <p className="text-slate-600 max-w-2xl">
              Stay up to date with the latest discoveries, mission updates, and space exploration news.
            </p>
          </div>
          <a 
            href="#news-archive" 
            className="mt-4 md:mt-0 flex items-center text-[#0B3D91] hover:text-[#FC3D21] font-medium transition-colors"
          >
            <span className="mr-1">View all news</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-[#0B3D91] text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-slate-500 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.excerpt}</p>
                <a 
                  href={`#news/${item.id}`} 
                  className="text-[#0B3D91] hover:text-[#FC3D21] font-medium text-sm flex items-center transition-colors"
                >
                  <span className="mr-1">Read full story</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#subscribe" 
            className="inline-block bg-[#0B3D91] hover:bg-[#072d70] text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Subscribe to NASA Updates
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
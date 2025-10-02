import { useState } from 'react';
import { Car, Gauge, Trophy, Zap } from 'lucide-react';

type CarCategory = 'saloon' | 'sports' | 'rally' | 'formula';

interface RacingCar {
  id: number;
  name: string;
  category: CarCategory;
  topSpeed: string;
  image: string;
}

const racingCars: RacingCar[] = [
  {
    id: 1,
    name: 'BMW M5 Competition',
    category: 'saloon',
    topSpeed: '305 km/h',
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Mercedes-AMG E63 S',
    category: 'saloon',
    topSpeed: '300 km/h',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Audi RS7 Sportback',
    category: 'saloon',
    topSpeed: '305 km/h',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Porsche 911 GT3',
    category: 'sports',
    topSpeed: '320 km/h',
    image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    name: 'Ferrari 488 GTB',
    category: 'sports',
    topSpeed: '330 km/h',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    name: 'Lamborghini Huracán',
    category: 'sports',
    topSpeed: '325 km/h',
    image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 7,
    name: 'Subaru WRX STI Rally',
    category: 'rally',
    topSpeed: '260 km/h',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 8,
    name: 'Ford Fiesta WRC',
    category: 'rally',
    topSpeed: '200 km/h',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 9,
    name: 'Red Bull Racing RB19',
    category: 'formula',
    topSpeed: '350 km/h',
    image: 'https://images.pexels.com/photos/9489966/pexels-photo-9489966.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 10,
    name: 'Mercedes F1 W14',
    category: 'formula',
    topSpeed: '345 km/h',
    image: 'https://images.pexels.com/photos/12801336/pexels-photo-12801336.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const categories = [
  { id: 'saloon' as CarCategory, name: 'Saloon', icon: Car, color: 'from-slate-600 to-slate-800' },
  { id: 'sports' as CarCategory, name: 'Sports', icon: Zap, color: 'from-red-600 to-red-800' },
  { id: 'rally' as CarCategory, name: 'Rally', icon: Trophy, color: 'from-orange-600 to-orange-800' },
  { id: 'formula' as CarCategory, name: 'Formula', icon: Gauge, color: 'from-blue-600 to-blue-800' }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('saloon');

  const filteredCars = racingCars.filter(car => car.category === selectedCategory);
  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Car className="w-10 h-10 text-red-500" />
            <h1 className="text-4xl font-bold text-white tracking-tight">Racing Showcase</h1>
          </div>
          <p className="text-gray-400 mt-2 text-lg">Explore the world's most powerful racing machines</p>
        </div>
      </header>

      {/* Category Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">Select Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative group overflow-hidden rounded-xl p-6 transition-all duration-300 ${
                  isSelected
                    ? 'ring-4 ring-white shadow-2xl scale-105'
                    : 'ring-2 ring-gray-700 hover:ring-gray-500 hover:scale-102'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Icon className="w-12 h-12 text-white" />
                  <span className="text-xl font-bold text-white">{category.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cars Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center gap-3 mb-8">
          {selectedCategoryData && (
            <>
              <selectedCategoryData.icon className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold text-white">{selectedCategoryData.name} Cars</h2>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {car.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-300">
                  <Gauge className="w-5 h-5 text-red-500" />
                  <span className="text-lg font-medium">Top Speed: {car.topSpeed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

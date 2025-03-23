import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  ClockIcon,
  ArrowPathIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

const trainCategories = [
  {
    name: 'Superfast Trains',
    description: 'Premium trains with high speed and comfort',
    icon: ArrowPathIcon,
    trains: [
      {
        name: 'Rajdhani Express',
        number: '12301/12302',
        route: 'New Delhi - Mumbai Central',
        departure: '16:55',
        arrival: '08:35',
        duration: '15h 40m',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/7237530/pexels-photo-7237530.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      {
        name: 'Shatabdi Express',
        number: '12001/12002',
        route: 'New Delhi - Bhopal',
        departure: '06:00',
        arrival: '12:30',
        duration: '6h 30m',
        rating: 4.6,
        image: 'https://images.pexels.com/photos/12120331/pexels-photo-12120331.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  {
    name: 'Premium Trains',
    description: 'Luxury trains with world-class amenities',
    icon: StarIcon,
    trains: [
      {
        name: 'Maharajas Express',
        number: '12951/12952',
        route: 'Delhi - Mumbai',
        departure: '18:00',
        arrival: '10:00',
        duration: '16h 00m',
        rating: 4.9,
        image: 'https://images.pexels.com/photos/22724145/pexels-photo-22724145/free-photo-of-group-of-men-with-various-tubs-in-front-of-a-train.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      {
        name: 'Palace on Wheels',
        number: '12953/12954',
        route: 'Delhi - Jaipur - Udaipur',
        departure: '16:30',
        arrival: '09:30',
        duration: '17h 00m',
        rating: 4.7,
        image: 'https://images.pexels.com/photos/31180796/pexels-photo-31180796/free-photo-of-historic-kalka-shimla-railway-trains-in-yard.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  {
    name: 'Express Trains',
    description: 'Regular express trains connecting major cities',
    icon: ClockIcon,
    trains: [
      {
        name: 'Duronto Express',
        number: '12273/12274',
        route: 'Mumbai - Delhi',
        departure: '23:05',
        arrival: '16:25',
        duration: '17h 20m',
        rating: 4.5,
        image: 'https://images.pexels.com/photos/7237530/pexels-photo-7237530.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
      {
        name: 'Garib Rath Express',
        number: '12201/12202',
        route: 'Mumbai - Delhi',
        departure: '17:45',
        arrival: '11:15',
        duration: '17h 30m',
        rating: 4.3,
        image: 'https://images.pexels.com/photos/12120331/pexels-photo-12120331.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
]

export default function TrainList() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary">
      {/* Background Image with Blur */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/2790396/pexels-photo-2790396.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Train Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-light-bg-primary/90 dark:bg-dark-bg-primary/90 backdrop-blur-sm" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-light-text-primary dark:text-dark-text-primary">
            Popular Trains
          </h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted">
            Discover India's most popular railway routes
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 sm:mt-8 max-w-2xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search trains by name, number, or route..."
              className="block w-full rounded-lg border-0 pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted focus:ring-2 focus:ring-primary"
            />
            <MagnifyingGlassIcon className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-light-text-muted dark:text-dark-text-muted" />
          </div>
        </motion.div>

        {/* Train Categories */}
        <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
          {trainCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h2 className="text-xl sm:text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  {category.name}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted mb-4 sm:mb-6">
                {category.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {category.trains.map((train, trainIndex) => (
                  <motion.div
                    key={train.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + trainIndex * 0.1 }}
                    className="bg-light-bg-primary dark:bg-dark-bg-primary rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-40 sm:h-48">
                      <img
                        src={train.image}
                        alt={train.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {train.name}
                          </h3>
                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 sm:py-1 rounded-full">
                            <StarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400" />
                            <span className="text-xs sm:text-sm text-white">{train.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted">
                          Train #{train.number}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-primary">
                          {train.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-light-text-muted dark:text-dark-text-muted" />
                        <span className="text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary">
                          {train.route}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4 text-light-text-muted dark:text-dark-text-muted" />
                          <span className="text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary">
                            {train.departure} - {train.arrival}
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
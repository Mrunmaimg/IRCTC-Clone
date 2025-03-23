import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  ClockIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'

// Mock data for demonstration
const mockTrainData = {
  trainNumber: '12345',
  trainName: 'Rajdhani Express',
  currentStation: 'New Delhi',
  nextStation: 'Agra Cantt',
  status: 'On Time',
  speed: '120 km/h',
  lastUpdated: '2 minutes ago',
  stations: [
    { name: 'New Delhi', arrival: '10:00', departure: '10:15', status: 'completed' },
    { name: 'Agra Cantt', arrival: '12:30', departure: '12:45', status: 'current' },
    { name: 'Jhansi', arrival: '15:00', departure: '15:15', status: 'upcoming' },
    { name: 'Bhopal', arrival: '18:30', departure: '18:45', status: 'upcoming' },
    { name: 'Mumbai Central', arrival: '23:00', departure: '23:15', status: 'upcoming' },
  ],
}

export default function TrackTrain() {
  const [trainNumber, setTrainNumber] = useState('')
  const [isTracking, setIsTracking] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTracking(true)
  }

  return (
    <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501686972563-744ae20511d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Track Your Train</h1>
          <p className="text-white/80 text-lg">
            Get real-time updates about your train's location and status
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg p-6 mb-8"
        >
          <form onSubmit={handleTrack} className="flex gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={trainNumber}
                onChange={(e) => setTrainNumber(e.target.value)}
                placeholder="Enter Train Number"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Track Train
            </motion.button>
          </form>
        </motion.div>

        {/* Train Status */}
        {isTracking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto bg-white dark:bg-dark-bg-secondary rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary">
                  {mockTrainData.trainName}
                </h2>
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  Train #{mockTrainData.trainNumber}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ArrowPathIcon className="h-5 w-5 text-primary animate-spin" />
                <span className="text-sm text-light-text-muted dark:text-dark-text-muted">
                  Last updated {mockTrainData.lastUpdated}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-light-bg-primary dark:bg-dark-bg-primary p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-light-text-primary dark:text-dark-text-primary">
                    Current Location
                  </h3>
                </div>
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  {mockTrainData.currentStation}
                </p>
              </div>
              <div className="bg-light-bg-primary dark:bg-dark-bg-primary p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <ClockIcon className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-light-text-primary dark:text-dark-text-primary">
                    Status
                  </h3>
                </div>
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  {mockTrainData.status}
                </p>
              </div>
              <div className="bg-light-bg-primary dark:bg-dark-bg-primary p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-light-text-primary dark:text-dark-text-primary">
                    Next Station
                  </h3>
                </div>
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  {mockTrainData.nextStation}
                </p>
              </div>
            </div>

            {/* Journey Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
              {mockTrainData.stations.map((station, index) => (
                <motion.div
                  key={station.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <div
                    className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      station.status === 'completed'
                        ? 'bg-green-500'
                        : station.status === 'current'
                        ? 'bg-primary'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        station.status === 'completed'
                          ? 'bg-white'
                          : station.status === 'current'
                          ? 'bg-white'
                          : 'bg-gray-400 dark:bg-gray-500'
                      }`}
                    />
                  </div>
                  <div className="bg-light-bg-primary dark:bg-dark-bg-primary p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-light-text-primary dark:text-dark-text-primary">
                          {station.name}
                        </h4>
                        <p className="text-sm text-light-text-muted dark:text-dark-text-muted">
                          Arr: {station.arrival} | Dep: {station.departure}
                        </p>
                      </div>
                      {station.status === 'current' && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 
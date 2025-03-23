import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPinIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

interface Station {
  name: string
  arrivalTime: string
  departureTime: string
  status: 'completed' | 'current' | 'upcoming'
  delay: number
}

const mockStations: Station[] = [
  {
    name: 'New Delhi',
    arrivalTime: '16:55',
    departureTime: '17:00',
    status: 'completed',
    delay: 0,
  },
  {
    name: 'Mathura Junction',
    arrivalTime: '18:45',
    departureTime: '18:47',
    status: 'completed',
    delay: 5,
  },
  {
    name: 'Agra Cantt',
    arrivalTime: '19:30',
    departureTime: '19:35',
    status: 'current',
    delay: 10,
  },
  {
    name: 'Gwalior',
    arrivalTime: '21:15',
    departureTime: '21:20',
    status: 'upcoming',
    delay: 0,
  },
  {
    name: 'Bhopal',
    arrivalTime: '00:30',
    departureTime: '00:35',
    status: 'upcoming',
    delay: 0,
  },
]

export default function TrackTrain() {
  const [trainNumber, setTrainNumber] = useState('')
  const [showStatus, setShowStatus] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowStatus(true)
  }

  const getStatusColor = (status: Station['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500'
      case 'current':
        return 'text-blue-500'
      case 'upcoming':
        return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-gray-900">Track Your Train</h2>
            <p className="mt-1 text-sm text-gray-500">
              Enter your train number to get real-time running status
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={trainNumber}
                  onChange={(e) => setTrainNumber(e.target.value)}
                  placeholder="Enter train number"
                  className="input-field flex-1"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Get Status
                </button>
              </div>
            </form>

            {showStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <div className="mb-6 rounded-lg bg-primary/5 p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Rajdhani Express (12301)
                  </h3>
                  <p className="text-sm text-gray-500">New Delhi → Mumbai Central</p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4" />
                      Running 10 minutes late
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-500">
                      <CheckCircleIcon className="h-4 w-4" />
                      On time at destination
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {mockStations.map((station, index) => (
                    <div key={station.name} className="relative flex pb-8">
                      {index < mockStations.length - 1 && (
                        <div className="absolute left-4 top-4 -bottom-8 w-0.5 bg-gray-200" />
                      )}
                      <div
                        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-white shadow ${
                          station.status === 'current' ? 'ring-2 ring-primary ring-offset-2' : ''
                        }`}
                      >
                        <MapPinIcon
                          className={`h-5 w-5 ${getStatusColor(station.status)}`}
                        />
                      </div>
                      <div className="flex-1 pl-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">
                              {station.name}
                            </h4>
                            <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                              <span>
                                Arr: {station.arrivalTime}
                                {station.delay > 0 && (
                                  <span className="ml-1 text-red-500">
                                    (+{station.delay} min)
                                  </span>
                                )}
                              </span>
                              <span>•</span>
                              <span>
                                Dep: {station.departureTime}
                                {station.delay > 0 && (
                                  <span className="ml-1 text-red-500">
                                    (+{station.delay} min)
                                  </span>
                                )}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`rounded-full px-3 py-1 text-sm font-medium ${
                              station.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : station.status === 'current'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {station.status === 'completed'
                              ? 'Departed'
                              : station.status === 'current'
                              ? 'Current Station'
                              : 'Upcoming'}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
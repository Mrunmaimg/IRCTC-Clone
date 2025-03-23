import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { ClockIcon, CurrencyRupeeIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'

// Mock data for trains
const mockTrains = [
  {
    id: 1,
    name: 'Rajdhani Express',
    number: '12301',
    from: 'New Delhi',
    to: 'Mumbai Central',
    departure: '16:55',
    arrival: '08:35',
    duration: '15h 40m',
    classes: ['1A', '2A', '3A'],
    fare: {
      '1A': 4500,
      '2A': 2650,
      '3A': 1850,
    },
  },
  {
    id: 2,
    name: 'Shatabdi Express',
    number: '12002',
    from: 'New Delhi',
    to: 'Mumbai Central',
    departure: '06:00',
    arrival: '22:35',
    duration: '16h 35m',
    classes: ['CC', 'EC'],
    fare: {
      'CC': 1250,
      'EC': 2450,
    },
  },
  // Add more mock trains as needed
]

interface SearchState {
  from: string
  to: string
  date: Date
  class: string
  quota: string
}

export default function TrainList() {
  const location = useLocation()
  const searchData = location.state as SearchState
  const [sortBy, setSortBy] = useState<'departure' | 'duration' | 'fare'>('departure')
  const [filters, setFilters] = useState({
    classes: [] as string[],
    maxFare: 5000,
  })

  const formatTime = (time: string) => {
    return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters */}
          <div className="lg:w-64">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg bg-white p-6 shadow"
            >
              <h3 className="text-lg font-medium text-gray-900">Filters</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                    className="mt-1 input-field"
                  >
                    <option value="departure">Departure Time</option>
                    <option value="duration">Duration</option>
                    <option value="fare">Fare</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Max Fare</label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="500"
                    value={filters.maxFare}
                    onChange={(e) => setFilters((prev) => ({ ...prev, maxFare: Number(e.target.value) }))}
                    className="mt-1 w-full"
                  />
                  <div className="mt-1 text-sm text-gray-500">₹{filters.maxFare}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Train List */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="rounded-lg bg-white p-6 shadow">
                <h2 className="text-xl font-semibold text-gray-900">
                  {searchData.from} to {searchData.to}
                </h2>
                <p className="text-sm text-gray-500">
                  {searchData.date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <div className="space-y-4">
                {mockTrains.map((train) => (
                  <motion.div
                    key={train.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-lg bg-white p-6 shadow hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {train.name}
                          <span className="ml-2 text-sm text-gray-500">#{train.number}</span>
                        </h3>
                        <div className="mt-1 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold">{formatTime(train.departure)}</span>
                            <ArrowLongRightIcon className="h-5 w-5 text-gray-400" />
                            <span className="text-lg font-semibold">{formatTime(train.arrival)}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <ClockIcon className="h-4 w-4" />
                            {train.duration}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <CurrencyRupeeIcon className="h-4 w-4" />
                          Starts from ₹{Math.min(...Object.values(train.fare))}
                        </div>
                        <button className="btn-primary">Check Availability</button>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {train.classes.map((cls) => (
                        <span
                          key={cls}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 
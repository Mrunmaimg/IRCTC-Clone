import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export default function TrainSearch() {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: '',
    class: 'all',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to train list with search params
    navigate('/train-list', { state: searchData })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const swapStations = () => {
    setSearchData((prev) => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }))
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="text-center text-3xl font-bold text-gray-900">Search Trains</h1>
          <p className="mt-2 text-center text-gray-600">
            Find trains between stations and book your tickets
          </p>

          <div className="mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="overflow-hidden rounded-lg bg-white shadow"
            >
              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="relative">
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                      From Station
                    </label>
                    <input
                      type="text"
                      name="from"
                      id="from"
                      required
                      value={searchData.from}
                      onChange={handleInputChange}
                      className="mt-1 input-field"
                      placeholder="Enter station name or code"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                      To Station
                    </label>
                    <input
                      type="text"
                      name="to"
                      id="to"
                      required
                      value={searchData.to}
                      onChange={handleInputChange}
                      className="mt-1 input-field"
                      placeholder="Enter station name or code"
                    />
                    <button
                      type="button"
                      onClick={swapStations}
                      className="absolute right-0 top-8 -mr-10 rounded-full bg-white p-1.5 text-gray-400 hover:text-gray-500"
                    >
                      <ArrowsRightLeftIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Journey Date
                    </label>
                    <div className="relative mt-1">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        required
                        value={searchData.date}
                        onChange={handleInputChange}
                        className="input-field"
                        min={new Date().toISOString().split('T')[0]}
                      />
                      <CalendarIcon className="pointer-events-none absolute right-3 top-2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700">
                      Travel Class
                    </label>
                    <select
                      id="class"
                      name="class"
                      value={searchData.class}
                      onChange={handleInputChange}
                      className="mt-1 input-field"
                    >
                      <option value="all">All Classes</option>
                      <option value="1A">First AC</option>
                      <option value="2A">Second AC</option>
                      <option value="3A">Third AC</option>
                      <option value="SL">Sleeper</option>
                      <option value="CC">Chair Car</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <button type="submit" className="w-full btn-primary">
                    Search Trains
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 
import { useState } from 'react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { ArrowLongRightIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export default function TrainSearch() {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    date: new Date(),
    class: 'ALL',
    quota: 'GENERAL',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Navigate to train list with search params
    navigate('/train-list', { state: searchData })
  }

  const handleSwapStations = () => {
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
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900">Search Trains</h2>
              <p className="mt-1 text-sm text-gray-500">
                Find trains between any two stations across India
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                      From Station
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="from"
                        id="from"
                        required
                        value={searchData.from}
                        onChange={(e) => setSearchData((prev) => ({ ...prev, from: e.target.value }))}
                        className="input-field"
                        placeholder="Enter city or station"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                      To Station
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="to"
                        id="to"
                        required
                        value={searchData.to}
                        onChange={(e) => setSearchData((prev) => ({ ...prev, to: e.target.value }))}
                        className="input-field"
                        placeholder="Enter city or station"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleSwapStations}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 transform rounded-full bg-white p-2 shadow-md hover:bg-gray-50 sm:-left-6"
                    >
                      <ArrowsRightLeftIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                      Journey Date
                    </label>
                    <div className="mt-1">
                      <DatePicker
                        selected={searchData.date}
                        onChange={(date: Date | null) => setSearchData((prev) => ({ ...prev, date: date || new Date() }))}
                        minDate={new Date()}
                        className="input-field"
                        dateFormat="dd/MM/yyyy"
                      />
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
                      onChange={(e) => setSearchData((prev) => ({ ...prev, class: e.target.value }))}
                      className="mt-1 input-field"
                    >
                      <option value="ALL">All Classes</option>
                      <option value="1A">AC First Class (1A)</option>
                      <option value="2A">AC 2 Tier (2A)</option>
                      <option value="3A">AC 3 Tier (3A)</option>
                      <option value="SL">Sleeper (SL)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quota" className="block text-sm font-medium text-gray-700">
                      Quota
                    </label>
                    <select
                      id="quota"
                      name="quota"
                      value={searchData.quota}
                      onChange={(e) => setSearchData((prev) => ({ ...prev, quota: e.target.value }))}
                      className="mt-1 input-field"
                    >
                      <option value="GENERAL">General</option>
                      <option value="TATKAL">Tatkal</option>
                      <option value="LADIES">Ladies</option>
                      <option value="SENIOR_CITIZEN">Senior Citizen</option>
                    </select>
                  </div>
                </div>

                <div>
                  <button type="submit" className="w-full btn-primary">
                    Search Trains
                    <ArrowLongRightIcon className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 
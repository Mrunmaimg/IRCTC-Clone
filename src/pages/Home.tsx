import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ImageSlideshow from '../components/ImageSlideshow'
import {
  TagIcon as TrainIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon as UserGroupIcon,
  ShieldCheckIcon,
  BanknotesIcon as CurrencyRupeeIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  ArrowTrendingUpIcon,
  TicketIcon,
  MapIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Easy Booking',
    description: 'Book your train tickets in just a few clicks',
    icon: TicketIcon,
    link: '/trains',
  },
  {
    name: 'Live Tracking',
    description: 'Track your train in real-time',
    icon: MapIcon,
    link: '/track-train',
  },
  {
    name: 'PNR Status',
    description: 'Check your booking status instantly',
    icon: DocumentTextIcon,
    link: '/pnr-status',
  },
  {
    name: 'Group Booking',
    description: 'Book tickets for your entire group',
    icon: UserGroupIcon,
    link: '/group-booking',
  },
]

export default function Home() {
  const [fromStation, setFromStation] = useState('')
  const [toStation, setToStation] = useState('')
  const [date, setDate] = useState('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary">
      {/* Hero Section with Slideshow */}
      <div className="relative">
        <ImageSlideshow />
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
            Why Choose IRCTC?
          </h2>
          <p className="text-light-text-muted dark:text-dark-text-muted">
            Experience the best of Indian Railways with our premium services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link
                to={feature.link}
                className="block h-full text-light-text-primary dark:text-dark-text-primary hover:text-primary dark:hover:text-primary transition-colors"
              >
                <feature.icon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-light-text-muted dark:text-dark-text-muted">
                  {feature.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
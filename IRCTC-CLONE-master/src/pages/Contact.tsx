import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    name: 'Phone Support',
    description: 'Available 24/7 for urgent queries',
    icon: PhoneIcon,
    contact: '+91 139',
  },
  {
    name: 'Email Support',
    description: 'Get response within 24 hours',
    icon: EnvelopeIcon,
    contact: 'care@irctc.co.in',
  },
  {
    name: 'Regional Offices',
    description: 'Visit our nearest office',
    icon: MapPinIcon,
    contact: 'Find nearest office',
  },
  {
    name: 'Chat Support',
    description: 'Instant help from our team',
    icon: ChatBubbleLeftRightIcon,
    contact: 'Start chat',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pnr: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-light-text-muted dark:text-dark-text-muted">
            We're here to help with your train booking queries
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute right-0 top-0 -ml-12 pt-4 pr-4">
                  <method.icon className="h-8 w-8 text-primary/20" aria-hidden="true" />
                </div>
                <div className="text-base">
                  <h3 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {method.name}
                  </h3>
                  <p className="mt-2 text-light-text-muted dark:text-dark-text-muted">
                    {method.description}
                  </p>
                  <p className="mt-4 font-medium text-primary">
                    {method.contact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-light-bg-secondary/50 dark:bg-dark-bg-secondary/50 backdrop-blur-md rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-0 py-2.5 bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-0 py-2.5 bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="pnr"
                  className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"
                >
                  PNR Number (Optional)
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="pnr"
                    id="pnr"
                    value={formData.pnr}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-0 py-2.5 bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-light-text-primary dark:text-dark-text-primary"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full rounded-lg border-0 py-2.5 bg-light-bg-primary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-light-text-muted dark:placeholder:text-dark-text-muted focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
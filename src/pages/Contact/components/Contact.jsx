'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Mail, MessageSquare, HelpCircle, Phone, MapPin, Clock, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const contactUsSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  message: yup.string().required('Message is required'),
})

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [activeSection, setActiveSection] = useState('form')

  const form = useForm({
    resolver: yupResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    form.reset()
  }

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [submitSuccess])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-red-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="flex mb-8 space-x-4">
              <Button
                variant={activeSection === 'form' ? 'default' : 'outline'}
                onClick={() => setActiveSection('form')}
                className="flex-1"
              >
                Contact Form
              </Button>
              <Button
                variant={activeSection === 'info' ? 'default' : 'outline'}
                onClick={() => setActiveSection('info')}
                className="flex-1"
              >
                Contact Info
              </Button>
            </div>

            <AnimatePresence mode="wait">
              {activeSection === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John" {...field} className="bg-white/5 border-white/10 text-white placeholder-white/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} className="bg-white/5 border-white/10 text-white placeholder-white/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} className="bg-white/5 border-white/10 text-white placeholder-white/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="1234567890" {...field} className="bg-white/5 border-white/10 text-white placeholder-white/50" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="How can we help you?"
                                className="bg-white/5 border-white/10 text-white placeholder-white/50 min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          <Send className="mr-2 h-4 w-4" />
                        )}
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-300" />
                    <span>+254 797 398 004</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-300" />
                    <span>contact@codentrake.com</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                    <span>123 Innovation Street, Tech City, TC 12345</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-blue-300" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 p-4 bg-green-500/20 text-green-100 rounded-lg"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <MessageSquare className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-semibold">Live Chat</h3>
              </div>
              <p className="text-white/80 mb-4">Get instant answers with our live chat support.</p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <HelpCircle className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-semibold">FAQ</h3>
              </div>
              <p className="text-white/80 mb-4">Find quick answers in our comprehensive FAQ section.</p>
              <Button variant="outline" className="w-full">
                View FAQs
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-semibold">Newsletter</h3>
              </div>
              <p className="text-white/80 mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex space-x-2">
                <Input placeholder="Enter your email" className="bg-white/5 border-white/10 text-white placeholder-white/50" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact


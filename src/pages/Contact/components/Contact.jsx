'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactUsSchema } from '@/lib/validation'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from "react-google-recaptcha"
import { Button } from "@/components/ui/button"
import { Send, Mail, MessageSquare, HelpCircle, Phone, MapPin, Clock } from 'lucide-react'
import { recaptchaSiteKey } from '@/constants/global'
import Container from '@/components/Container'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState('message')

  const form = useForm({
    resolver: yupResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      surname: "",
      email: "",
      mobileNumber: "",
      message: "",
      capVal: "",
    },
    mode: "onSubmit",
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    form.reset()
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [submitSuccess])

  return (
    <div className="bg-gradient-to-b from-brandLighter to-white text-brandDark">
      <Container className="py-16 sm:py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl text-brandDark/70 max-w-2xl mx-auto">
            We'd love to hear from you. Let's create something great together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brandDark to-brandMedium"></div>
            <div className="flex mb-6 space-x-4">
              <Button
                variant={activeTab === 'message' ? 'default' : 'outline'}
                onClick={() => setActiveTab('message')}
                className="flex-1"
              >
                Send Message
              </Button>
              <Button
                variant={activeTab === 'info' ? 'default' : 'outline'}
                onClick={() => setActiveTab('info')}
                className="flex-1"
              >
                Contact Info
              </Button>
            </div>
            <AnimatePresence mode="wait">
              {activeTab === 'message' ? (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
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
                                <Input placeholder="Enter First name" {...field} className="rounded-lg" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="surname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Surname</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter Surname" {...field} className="rounded-lg" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="mobileNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mobile Number</FormLabel>
                              <PhoneInput
                                {...field}
                                placeholder="Enter Mobile Number"
                                inputStyle={{ width: "100%", height: "40px" }}
                                buttonStyle={{ borderTopLeftRadius: "0.5rem", borderBottomLeftRadius: "0.5rem" }}
                                inputClass="rounded-lg"
                              />
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter Email" {...field} className="rounded-lg" />
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
                                placeholder="Please share with us the reason for contacting us"
                                className="resize-none rounded-lg"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="capVal"
                        render={({ field }) => (
                          <FormItem>
                            <ReCAPTCHA {...field} sitekey={recaptchaSiteKey} size="normal" />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        variant="default"
                        className="w-full bg-gradient-to-r from-brandDark to-brandMedium hover:from-brandMedium hover:to-brandDark text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandDark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Send Message <Send className="ml-2 w-5 h-5" />
                          </span>
                        )}
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
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-brandDark" />
                    <span>+254 797 398 004</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-brandDark" />
                    <span>vincentotienoakuku@gmail.com</span>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-brandDark flex-shrink-0 mt-1" />
                    <span>123 Tech Street, Innovate City, IN 12345</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-brandDark" />
                    <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
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
                  className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <MessageSquare className="w-8 h-8 text-brandDark" />
                <h3 className="text-xl font-semibold">Knowledgebase</h3>
              </div>
              <p className="text-brandDark/70 mb-4">We're here to help with any questions or code issues you might have.</p>
              <a
                className="inline-flex items-center text-brandDark hover:text-brandMedium font-medium transition-colors duration-300"
                href="#"
              >
                Contact support
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <HelpCircle className="w-8 h-8 text-brandDark" />
                <h3 className="text-xl font-semibold">FAQ</h3>
              </div>
              <p className="text-brandDark/70 mb-4">Find quick answers in our comprehensive FAQ section.</p>
              <a
                className="inline-flex items-center text-brandDark hover:text-brandMedium font-medium transition-colors duration-300"
                href="/about-us#faq"
              >
                Visit FAQ
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <Mail className="w-8 h-8 text-brandDark" />
                <h3 className="text-xl font-semibold">Email Us</h3>
              </div>
              <p className="text-brandDark/70 mb-4">Prefer to write an email? Reach out to us directly.</p>
              <a
                className="inline-flex items-center text-brandDark hover:text-brandMedium font-medium transition-colors duration-300"
                href="mailto:vincentotienoakuku@gmail.com"
              >
                vincentotienoakuku@gmail.com
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
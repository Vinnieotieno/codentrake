import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, PhoneCall } from 'lucide-react'
import Container from '@/components/Container'
import landhero from '../../../assets/landhero.png'
import vscode from '../../../assets/vscode.png'
import rocket from '../../../assets/rocket.png'
import apple from '../../../assets/apple.png'

const Hero = () => {
  const particlesRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const canvas = particlesRef.current
    const ctx = canvas.getContext('2d')
    let particlesArray = []

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.size > 0.2) this.size -= 0.1
      }
      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    function init() {
      particlesArray = []
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particlesArray.push(new Particle(x, y))
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()

    controls.start({ opacity: 1, y: 0 })

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [controls])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  }

  const handlePhoneCall = () => {
    window.location.href = 'tel:+254797398004'
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brandLighter via-brandLighter to-green-100 min-h-screen">
      <canvas ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      <Container className="relative z-10 flex flex-col items-center lg:flex-row pt-24 lg:pt-0 min-h-screen">
        <motion.div 
          className="text-left py-6 max-w-[600px] 2xl:max-w-[800px] z-10"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold leading-tight mb-6 text-green-900"
            variants={fadeInUp}
          >
            Need Futuristic <br />
            design for your brand <span className="text-purple-900">?</span> <br className="2xl:hidden" />
            <span className="text-orange-400 font-bold">We're Here...</span>
          </motion.h1>
          <motion.p 
            className="text-xl mt-6 leading-relaxed text-green-800"
            variants={fadeInUp}
          >
            Welcome to <span className="text-orange-400 font-semibold">Vigilux</span>, where we ignite possibilities, amplify creativity, and engineer
            success through our innovative technology solutions, propelling you forward in the digital realm.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-10 font-bold"
            variants={fadeInUp}
          >
            <motion.button 
              className="px-8 py-4 text-lg bg-green-900 text-white border-green-900 border-2 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-800 hover:border-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </motion.button>
            <motion.button 
              className="px-8 py-4 text-lg text-green-900 border-green-900 border-2 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePhoneCall}
            >
              <span>+254797398004</span>
              <PhoneCall className="ml-2 w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative w-full max-w-2xl mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={landhero} 
            alt="Hero" 
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
          <motion.img 
            src={apple} 
            alt="Apple" 
            className="absolute -right-10 top-20 w-24 h-20"
            animate={floatingAnimation}
          />
          <motion.img 
            src={vscode} 
            alt="VS Code" 
            className="absolute -left-10 top-40 w-24 h-20"
            animate={floatingAnimation}
          />
          <motion.img 
            src={rocket} 
            alt="Rocket" 
            className="absolute right-20 bottom-10 w-28 h-20"
            animate={floatingAnimation}
          />
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero
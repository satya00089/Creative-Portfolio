'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 80 })
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 80 })

  // Ring follows with lag
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseEnterInteractive = () => {
      if (cursorRef.current) cursorRef.current.classList.add('cursor-hover')
      if (ringRef.current) ringRef.current.classList.add('ring-hover')
    }

    const handleMouseLeaveInteractive = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('cursor-hover')
      if (ringRef.current) ringRef.current.classList.remove('ring-hover')
    }

    window.addEventListener('mousemove', handleMouseMove)

    const interactiveEls = document.querySelectorAll(
      'a, button, [data-cursor="pointer"], input, textarea'
    )
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive)
      el.addEventListener('mouseleave', handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-[width,height,background] duration-200 [.cursor-hover]:h-3 [.cursor-hover]:w-3"
        style={{ left: dotX, top: dotY }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50 transition-[width,height,opacity] duration-300 [.ring-hover]:h-14 [.ring-hover]:w-14 [.ring-hover]:border-accent"
        style={{ left: ringX, top: ringY }}
      />
    </>
  )
}

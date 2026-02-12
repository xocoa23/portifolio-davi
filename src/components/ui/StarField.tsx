'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  size: number
  opacity: number
  seed: number
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const targetMouseRef = useRef({ x: 0, y: 0 })
  const smoothMouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const createStars = (width: number, height: number) => {
      const count = Math.floor((width * height) / 5000)
      const stars: Star[] = []
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 3,
          size: Math.random() * 2 + 0.3,
          opacity: Math.random() * 0.7 + 0.3,
          seed: Math.random() * 1000,
        })
      }
      return stars
    }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      starsRef.current = createStars(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)

    // Listen on window instead of canvas for smoother tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      // Only track if mouse is over the hero section area
      if (e.clientY < rect.bottom) {
        targetMouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    let time = 0

    const animate = () => {
      if (!ctx || !canvas) return
      time += 0.003

      // Smooth interpolation (lerp) for fluid mouse following
      const lerp = 0.05
      smoothMouseRef.current.x += (targetMouseRef.current.x - smoothMouseRef.current.x) * lerp
      smoothMouseRef.current.y += (targetMouseRef.current.y - smoothMouseRef.current.y) * lerp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = smoothMouseRef.current.x
      const my = smoothMouseRef.current.y

      starsRef.current.forEach((star) => {
        const parallax = star.z * 0.5 + 0.2
        const dx = mx * parallax * 40
        const dy = my * parallax * 40

        const x = star.x + dx
        const y = star.y + dy

        // Smooth twinkle using star's unique seed
        const twinkle = Math.sin(time * (star.z + 0.5) * 1.5 + star.seed) * 0.3 + 0.7
        const alpha = star.opacity * twinkle

        const radius = star.size * (star.z * 0.3 + 0.7)

        // Main star
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(210, 225, 255, ${alpha})`
        ctx.fill()

        // Glow on brighter stars
        if (star.size > 1.2 && twinkle > 0.8) {
          ctx.beginPath()
          ctx.arc(x, y, radius * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(150, 190, 255, ${alpha * 0.1})`
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent', pointerEvents: 'none' }}
    />
  )
}

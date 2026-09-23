'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/**
 * Nanoparticle network canvas — particles slowly drift and "assemble" by
 * drawing bonds to nearby neighbors, evoking a self-organizing nanoscale lattice.
 */
export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let nodes: Node[] = []
    let raf = 0
    const pointer = { x: -9999, y: -9999 }

    const CYAN = 'rgba(56, 224, 238,'
    const BLUE = 'rgba(91, 124, 250,'

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = parent.clientWidth
      height = parent.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(90, Math.floor((width * height) / 14000))
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy

        // gentle pointer attraction
        const dx = pointer.x - n.x
        const dy = pointer.y - n.y
        const pd = Math.hypot(dx, dy)
        if (pd < 140) {
          n.vx += (dx / pd) * 0.008
          n.vy += (dy / pd) * 0.008
        }

        // damping + wrap
        n.vx *= 0.99
        n.vy *= 0.99
        if (n.x < 0) n.x = width
        if (n.x > width) n.x = 0
        if (n.y < 0) n.y = height
        if (n.y > height) n.y = 0
      }

      // bonds
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.4
            ctx.strokeStyle = `${CYAN}${alpha})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = n.r > 1.4 ? `${CYAN}0.9)` : `${BLUE}0.75)`
        ctx.fill()
      }

      if (!prefersReduced) raf = requestAnimationFrame(step)
    }

    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }
    function onLeave() {
      pointer.x = -9999
      pointer.y = -9999
    }

    resize()
    step()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerout', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerout', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}

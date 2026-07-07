import React, { useEffect, useRef } from 'react'

const COLORS = {
    blue: '59, 130, 246',
    gold: '212, 154, 81',
}

const PULSE_COUNT = 6

function createRng(seed) {
    let state = seed >>> 0
    return () => {
        state = (state + 0x6d2b79f5) >>> 0
        let t = Math.imul(state ^ (state >>> 15), 1 | state)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

function buildCircuit(width, height) {
    const rng = createRng(Math.round(width * 13 + height * 7))
    const cell = Math.max(36, Math.min(52, Math.round(Math.min(width, height) / 14)))
    const cols = Math.ceil(width / cell) + 1
    const rows = Math.ceil(height / cell) + 1
    const nodes = []
    const segments = []

    for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
            const x = col * cell + (rng() - 0.5) * cell * 0.35
            const y = row * cell + (rng() - 0.5) * cell * 0.35
            const rightBias = Math.pow(x / width, 0.65)
            const spawnChance = 0.12 + rightBias * 0.38

            if (rng() > spawnChance) continue

            nodes.push({
                x,
                y,
                color: rng() > 0.62 ? COLORS.gold : COLORS.blue,
                phase: rng() * Math.PI * 2,
                weight: 0.35 + rightBias * 0.65,
            })
        }
    }

    const maxDistance = cell * 1.85

    for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i]
        let best = null
        let bestDist = Infinity

        for (let j = i + 1; j < nodes.length; j += 1) {
            const b = nodes[j]
            const dx = b.x - a.x
            const dy = b.y - a.y
            const dist = Math.hypot(dx, dy)

            if (dist > maxDistance || dist < cell * 0.45) continue

            const axisAligned = Math.abs(dx) < 8 || Math.abs(dy) < 8
            const diagonal = Math.abs(Math.abs(dx) - Math.abs(dy)) < 10
            if (!axisAligned && !diagonal) continue
            if (rng() > 0.42 + (a.weight + b.weight) * 0.18) continue

            if (dist < bestDist) {
                bestDist = dist
                best = b
            }
        }

        if (!best) continue

        segments.push({
            x1: a.x,
            y1: a.y,
            x2: best.x,
            y2: best.y,
            color: rng() > 0.55 ? a.color : best.color,
            weight: (a.weight + best.weight) * 0.5,
            pulseOffset: rng(),
        })
    }

    const pulses = segments
        .filter((segment) => segment.weight > 0.55)
        .sort((left, right) => right.weight - left.weight)
        .slice(0, PULSE_COUNT)
        .map((segment, index) => ({
            segment,
            speed: 0.08 + (index % 3) * 0.025,
            offset: segment.pulseOffset,
        }))

    return { nodes, segments, pulses }
}

function drawCircuit(ctx, width, height, circuit, time, reducedMotion) {
    ctx.clearRect(0, 0, width, height)

    const { nodes, segments, pulses } = circuit
    const focusX = width * 0.68
    const focusY = height * 0.45

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    for (const segment of segments) {
        const midX = (segment.x1 + segment.x2) * 0.5
        const midY = (segment.y1 + segment.y2) * 0.5
        const focus = Math.exp(-Math.hypot(midX - focusX, midY - focusY) / (Math.min(width, height) * 0.42))
        const alpha = 0.05 + focus * 0.16 * segment.weight

        ctx.strokeStyle = `rgba(${segment.color}, ${alpha})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(segment.x1, segment.y1)
        ctx.lineTo(segment.x2, segment.y2)
        ctx.stroke()
    }

    for (const node of nodes) {
        const focus = Math.exp(-Math.hypot(node.x - focusX, node.y - focusY) / (Math.min(width, height) * 0.38))
        const pulse = reducedMotion ? 0 : Math.sin(time * 1.6 + node.phase) * 0.5 + 0.5
        const alpha = 0.12 + focus * 0.34 * node.weight + pulse * 0.12
        const radius = 1.2 + focus * 1.4 + pulse * 0.5

        ctx.fillStyle = `rgba(${node.color}, ${alpha})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fill()
    }

    if (reducedMotion) return

    for (const pulse of pulses) {
        const { segment, speed, offset } = pulse
        const progress = (time * speed + offset) % 1
        const x = segment.x1 + (segment.x2 - segment.x1) * progress
        const y = segment.y1 + (segment.y2 - segment.y1) * progress
        const focus = Math.exp(-Math.hypot(x - focusX, y - focusY) / (Math.min(width, height) * 0.35))
        const alpha = 0.18 + focus * 0.55

        ctx.strokeStyle = `rgba(${segment.color}, ${alpha})`
        ctx.lineWidth = 2.2
        ctx.shadowBlur = 8
        ctx.shadowColor = `rgba(${segment.color}, ${alpha})`
        ctx.beginPath()
        ctx.arc(x, y, 1.6, 0, Math.PI * 2)
        ctx.stroke()
        ctx.shadowBlur = 0
    }
}

export default function HomeHeroCircuitBackground() {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)
    const animationRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const canvas = canvasRef.current
        if (!container || !canvas) return undefined

        const ctx = canvas.getContext('2d', { alpha: true })
        if (!ctx) return undefined

        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        let reducedMotion = reducedMotionQuery.matches
        let width = 0
        let height = 0
        let circuit = { nodes: [], segments: [], pulses: [] }
        let time = 0
        let isVisible = true
        let isInView = true

        const resize = () => {
            const rect = container.getBoundingClientRect()
            const dpr = Math.min(window.devicePixelRatio || 1, 2)

            width = Math.max(1, rect.width)
            height = Math.max(1, rect.height)

            canvas.width = Math.round(width * dpr)
            canvas.height = Math.round(height * dpr)
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            circuit = buildCircuit(width, height)
        }

        const render = () => {
            drawCircuit(ctx, width, height, circuit, time, reducedMotion)
        }

        const animate = () => {
            if (isVisible && isInView) {
                if (!reducedMotion) {
                    time += 0.016
                }
                render()
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        const onVisibilityChange = () => {
            isVisible = document.visibilityState === 'visible'
            if (isVisible && isInView) {
                render()
            }
        }

        const onMotionPreferenceChange = (event) => {
            reducedMotion = event.matches
            render()
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                isInView = entry.isIntersecting
                if (isInView) {
                    render()
                }
            },
            { threshold: 0.05 }
        )

        resize()
        render()
        observer.observe(container)

        window.addEventListener('resize', resize)
        document.addEventListener('visibilitychange', onVisibilityChange)
        reducedMotionQuery.addEventListener('change', onMotionPreferenceChange)
        animationRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', resize)
            document.removeEventListener('visibilitychange', onVisibilityChange)
            reducedMotionQuery.removeEventListener('change', onMotionPreferenceChange)
            observer.disconnect()
            cancelAnimationFrame(animationRef.current)
        }
    }, [])

    return (
        <div ref={containerRef} className="home-hero-circuit-canvas-wrap">
            <canvas ref={canvasRef} className="home-hero-circuit-canvas" aria-hidden="true" />
        </div>
    )
}

"use client"

import type React from "react"
import { useState, useRef } from "react"
import { X, Check } from "lucide-react"

export function BumbleSwipe() {
  const startY = useRef(0)
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    startX.current = e.clientX
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const offset = currentX - startX.current
    setDragOffset(offset)
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        setSwipeDirection("right")
      } else {
        setSwipeDirection("left")
      }
    }
    setDragOffset(0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    startX.current = e.touches[0].clientX
    startY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const offsetX = currentX - startX.current
    setDragOffset(offsetX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        setSwipeDirection("right")
      } else {
        setSwipeDirection("left")
      }
    }
    setDragOffset(0)
  }

  const resetCard = () => {
    setSwipeDirection(null)
    setDragOffset(0)
  }

  if (swipeDirection === "left") {
    return (
      <section className="py-16 px-6 md:px-4 bg-yellow-400">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Swipe to Hire</h1>
          <p className="text-lg text-gray-700 font-medium">Find your next amazing developer</p>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl h-[650px] flex flex-col justify-center relative">
            <button
              onClick={resetCard}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 text-gray-600 hover:text-gray-800"
              title="Reset"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <X className="w-12 h-12 text-red-500" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">You lost a Gem 💎</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  That was your chance to hire an amazing founder!
                </p>
              </div>
              <button
                onClick={resetCard}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-700 font-medium">
            Made with ❤️ by{" "}
            <a
              href="https://x.com/krutikkkkkkkkk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 font-semibold underline transition-colors duration-200"
            >
              @krutikkkkkkkkk
            </a>
          </p>
        </div>
      </section>
    )
  }

  if (swipeDirection === "right") {
    return (
      <section className="py-16 px-6 md:px-4 bg-yellow-400" id="swipe">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Swipe to Hire</h1>
          <p className="text-lg text-gray-700 font-medium">Find your next amazing developer</p>
        </div>

        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-2xl h-[650px] flex flex-col justify-center relative">
            <button
              onClick={resetCard}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 text-gray-600 hover:text-gray-800"
              title="Reset"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-12 h-12 text-green-500" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">Great Choice! 🎉</h2>
                <p className="text-lg text-gray-600 leading-relaxed">Let's make something amazing together!</p>
              </div>
              <div className="space-y-4 w-full">
                <a
                  href="https://cal.com/krutik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  Schedule a Call
                </a>
                <a
                  href="mailto:krutik@infinitylinkage.com"
                  className="block bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-700 font-medium">
            Made with ❤️ by{" "}
            <a
              href="https://x.com/krutikkkkkkkkk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 font-semibold underline transition-colors duration-200"
            >
              @krutikkkkkkkkk
            </a>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6 md:px-4 bg-yellow-400" id="swipe">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Swipe to Hire</h1>
        <p className="text-lg text-gray-700 font-medium">Find your next amazing developer</p>
      </div>

      <div className="max-w-sm mx-auto">
        <div className="bg-white rounded-3xl p-4 shadow-2xl h-[650px] flex flex-col items-center justify-center">
          <div className="text-center my-2 w-full">
            <p className="text-sm text-gray-600 font-medium">← Swipe left to pass • Swipe right to hire →</p>
          </div>

          <div className="flex-1 flex items-center justify-center w-full h-full">
            <div
              ref={cardRef}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-grab ${
                isDragging ? "cursor-grabbing" : ""
              } transition-transform duration-200 w-full h-full max-h-[600px] max-w-[100%]`}
              style={{
                transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.1}deg)`,
                touchAction: "none",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative h-[60%] bg-gradient-to-br from-purple-400 to-blue-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mypic.jpg-Lwk9XatcubYQwVOmD6OpRMLpORRN8G.jpeg"
                  alt="Krutik Raut"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold">Krutik, 23</h2>
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-sm opacity-90 font-medium">Designer/Developer</p>
                  <p className="text-xs opacity-75">Gujarat, India</p>

                  <div className="inline-flex items-center gap-1 bg-yellow-500 text-black px-3 py-1.5 rounded-full text-xs font-semibold mt-3">
                    <span>💼</span>
                    <span>Business Networking</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-sm md:text-md font-semibold">Better than your ex designer/developer</h3>
                  <div className="flex flex-wrap gap-2 justify-start">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      🌐 Next Js
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      🚀 UI/UX Designing
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      ☕ Coffee
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      💻 Figma/Framer
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      🎨 Graphic Design
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      ⚡ RedBull
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">⚙️ AI</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                      🛠️ FrontEnd Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-700 font-medium">
          Made with ❤️ by{" "}
          <a
            href="https://x.com/krutikkkkkkkkk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-600 font-semibold underline transition-colors duration-200"
          >
            @krutikkkkkkkkk
          </a>
        </p>
      </div>
    </section>
  )
}

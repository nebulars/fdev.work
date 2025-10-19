'use client'

import React from 'react'
import Carousel from '../Carousel'

interface HeroSectionProps {
  title: string
  description: string
  buttonText: string
  carouselImages: string[]
  onApplyClick: () => void
}

export default function HeroSection({ 
  title, 
  description, 
  buttonText, 
  carouselImages, 
  onApplyClick 
}: HeroSectionProps) {
  return (
    <section className="relative">
      {/* 统一蓝色背景 */}
      <div className="bg-blue-600 px-8 py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[400px] lg:min-h-[500px]">
            {/* 左侧内容 */}
            <div className="text-white flex flex-col items-center justify-center text-center space-y-6 pr-4 lg:pr-8 min-h-[400px] lg:min-h-[500px] w-full max-w-full overflow-hidden">
              <h1
                className="leading-tight tracking-wider w-full break-words"
                style={{ 
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word'
                }}
              >
                {title}
              </h1>
              
              <p 
                className="text-base lg:text-lg text-blue-100 leading-relaxed w-full break-words"
                style={{ 
                  overflowWrap: 'break-word',
                  wordBreak: 'break-word'
                }}
              >
                {description}
              </p>
              
              <div className="pt-4">
                <button 
                  onClick={onApplyClick}
                  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-normal text-lg hover:bg-blue-950 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {buttonText}
                </button>
              </div>
            </div>

            {/* 右侧轮播图 */}
            <div className="relative">
              <Carousel 
                images={carouselImages}
                className="rounded-xl overflow-hidden w-full shadow-2xl"
              />
              
              {/* 装饰元素 */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400 bg-opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-400 bg-opacity-20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'

interface Feature {
  title: string
  image: string
}

interface FeatureShowcaseProps {
  features: Feature[]
}

export default function FeatureShowcase({ features }: FeatureShowcaseProps) {
  return (
    <div className="relative">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 pb-4" style={{ minWidth: 'fit-content' }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 text-center"
            >
              {/* 功能图片 */}
              <div className="mb-4 flex justify-center">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-auto h-80 max-w-none"
                />
              </div>
              
              {/* 功能标题 */}
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

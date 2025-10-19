'use client'

import React from 'react'
import QRCodeSection from './QRCodeSection'

interface MobileHeroProps {
  title: string
  subtitle: string
  features: string[]
}

const qrCodes = [
  {
    src: '/assets/ios_qrcode.png',
    alt: 'iOS QR Code'
  },
  {
    src: '/assets/android_qrcode.png',
    alt: 'Android QR Code'
  },
  {
    src: '/assets/mini_qrcode.png',
    alt: 'Mini Program QR Code'
  }
]

export default function MobileHero({ title, subtitle, features }: MobileHeroProps) {
  return (
    <div>
      {/* 标题区域 */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl text-gray-800 mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {subtitle}
        </p>
        <div className="space-y-3 text-lg text-gray-700">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* 二维码区域 */}
      <QRCodeSection qrCodes={qrCodes} />
    </div>
  )
}

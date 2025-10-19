'use client'

import React from 'react'

interface QRCodeItem {
  src: string
  alt: string
}

interface QRCodeSectionProps {
  qrCodes: QRCodeItem[]
}

export default function QRCodeSection({ qrCodes }: QRCodeSectionProps) {
  return (
    <div className="flex justify-start space-x-6">
      {qrCodes.map((qrCode, index) => (
        <div key={index} className="text-left">
          <div className="bg-gray-50 rounded-xl p-4 mb-3 hover:bg-gray-100 transition-colors">
            <img 
              src={qrCode.src} 
              alt={qrCode.alt} 
              className="w-32 h-32"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

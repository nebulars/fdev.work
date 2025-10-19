'use client'

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'

const FoundingTeam: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* 团队标题 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('about.team.title')}
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 团队成员卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 max-w-3xl mx-auto">
          {/* 徐晓波 - 董事长 & 创始人 */}
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-200">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 flex items-center justify-center">
              {/* 创始人头像 */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/assets/founder.png"
                  alt="徐晓波"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
              {t('about.team.xuXiaoBo.name')}
            </h3>
            <p className="text-blue-600 text-sm md:text-base lg:text-lg mb-3 md:mb-4 font-medium">
              {t('about.team.xuXiaoBo.title')}
            </p>
            <div className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
              {t('about.team.xuXiaoBo.description').split('\n').map((line, index) => (
                <p key={index} className="mb-2 last:mb-0">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundingTeam
'use client'

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const VisionMissionValues: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section 
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(/assets/back.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 蓝色渐变遮罩层 */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-600/60"></div> */}

      {/* 内容区域 */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-8 md:py-12">

        {/* 三个核心理念卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* 愿景卡片 */}
          <div className="bg-blue-800/80 backdrop-blur-sm rounded-lg p-6 md:p-8 text-center hover:bg-blue-700/80 transition-all duration-300 transform hover:scale-105 shadow-xl h-[340px] md:h-[360px] flex flex-col">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 flex items-center justify-center flex-shrink-0">
              {/* 愿景图标 - 同心圆 */}
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white opacity-30"></div>
                <div className="w-11 h-11 md:w-14 md:h-14 rounded-full border-4 border-white opacity-60 absolute top-2.5 left-2.5 md:top-3 md:left-3"></div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white absolute top-5 left-5 md:top-6 md:left-6"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white absolute top-6.5 left-6.5 md:top-8 md:left-8"></div>
              </div>
            </div>
            <div className="flex flex-col flex-grow justify-start">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                {t('about.vision.title')}
              </h3>
              <p className="text-base md:text-lg text-blue-100 mb-2 md:mb-3 font-medium px-2">
                {t('about.vision.subtitle')}
              </p>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed px-2">
                {t('about.vision.description')}
              </p>
            </div>
          </div>

          {/* 使命卡片 */}
          <div className="bg-blue-800/80 backdrop-blur-sm rounded-lg p-6 md:p-8 text-center hover:bg-blue-700/80 transition-all duration-300 transform hover:scale-105 shadow-xl h-[340px] md:h-[360px] flex flex-col">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 flex items-center justify-center flex-shrink-0">
              {/* 使命图标 - 六边形文档 */}
              <div className="relative">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="10" x2="16" y2="10" strokeWidth="2"/>
                  <line x1="8" y1="14" x2="16" y2="14" strokeWidth="2"/>
                  <line x1="10" y1="18" x2="14" y2="18" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col flex-grow justify-start">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                {t('about.mission.title')}
              </h3>
              <p className="text-base md:text-lg text-blue-100 mb-2 md:mb-3 font-medium px-2">
                {t('about.mission.subtitle')}
              </p>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed px-2">
                {t('about.mission.description')}
              </p>
            </div>
          </div>

          {/* 价值观卡片 */}
          <div className="bg-blue-800/80 backdrop-blur-sm rounded-lg p-6 md:p-8 text-center hover:bg-blue-700/80 transition-all duration-300 transform hover:scale-105 shadow-xl h-[340px] md:h-[360px] flex flex-col">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 flex items-center justify-center flex-shrink-0">
              {/* 价值观图标 - 钻石/宝石 */}
              <div className="relative">
                <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="6 3 18 3 22 9 12 21 2 9" strokeWidth="2" fill="none"/>
                  <line x1="12" y1="21" x2="12" y2="9" strokeWidth="2"/>
                  <line x1="22" y1="9" x2="2" y2="9" strokeWidth="2"/>
                  <line x1="6" y1="3" x2="12" y2="9" strokeWidth="2"/>
                  <line x1="18" y1="3" x2="12" y2="9" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col flex-grow justify-start">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                {t('about.values.title')}
              </h3>
              <p className="text-base md:text-lg text-blue-100 mb-2 md:mb-3 font-medium px-2">
                {t('about.values.subtitle')}
              </p>
              <p className="text-blue-200 text-sm md:text-base leading-relaxed px-2">
                {t('about.values.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionValues
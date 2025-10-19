'use client'

import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const Timeline: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* 大事记标题 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('about.timeline.title')}
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* 时间线 */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* 时间线主轴 - 左侧垂直线 */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
            
            {/* 时间线事件 */}
            <div className="space-y-8 md:space-y-12">
              
              {/* 2025年事件 */}
              <div className="relative">
                {/* 年份标记 */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base z-10">
                    2025
                  </div>
                </div>
                
                {/* 2025年事件列表 */}
                <div className="ml-14 md:ml-20 space-y-6">
                  {/* 公司成立 */}
                  <div className="relative">
                    <div className="absolute -left-8 md:-left-14 top-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {t('about.timeline.events.founding.title')}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {t('about.timeline.events.founding.description')}
                      </p>
                    </div>
                  </div>
                  
                  {/* AI投研平台内测 */}
                  <div className="relative">
                    <div className="absolute -left-8 md:-left-14 top-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {t('about.timeline.events.product.title')}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {t('about.timeline.events.product.description')}
                      </p>
                    </div>
                  </div>
                  
                  {/* AI投研平台对外发布 */}
                  <div className="relative">
                    <div className="absolute -left-8 md:-left-14 top-3">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md"></div>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {t('about.timeline.events.launch.title')}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {t('about.timeline.events.launch.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
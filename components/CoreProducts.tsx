'use client'

import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const CoreProducts: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
            {t('home.coreProducts')}
          </h2>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* 智能问答 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
            <div className="flex flex-col h-full">
              {/* 图标和标题 */}
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/assets/qa1.png" 
                  alt="智能问答图标"
                  className="w-24 h-24 object-contain flex-shrink-0"
                />
                <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors duration-300 text-left">
                  {t('home.intelligentQA')}
                </h3>
              </div>
              
              {/* 描述文字 */}
              <div className="flex-1 flex items-center mb-6">
                <p className="text-gray-600 leading-relaxed text-left">
                  {t('home.intelligentQADesc')}
                </p>
              </div>
              
              {/* 图片 */}
              <img 
                src="/assets/q&a.png" 
                alt="智能问答"
                className="w-full h-auto object-contain"
              />
              
              {/* 了解更多 - 隐藏 */}
              {/* <div className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200 text-left">
                了解更多 →
              </div> */}
            </div>
          </div>

          {/* 文件翻译 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
            <div className="flex flex-col h-full">
              {/* 图标和标题 */}
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/assets/trans.png" 
                  alt="文档翻译图标"
                  className="w-24 h-24 object-contain flex-shrink-0"
                />
                <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors duration-300 text-left">
                  {t('home.documentTranslation')}
                </h3>
              </div>
              
              {/* 描述文字 */}
              <div className="flex-1 flex items-center mb-6">
                <p className="text-gray-600 leading-relaxed text-left">
                  {t('home.documentTranslationDesc')}
                </p>
              </div>
              
              {/* 图片 */}
              <img 
                src="/assets/translate.png" 
                alt="文件翻译"
                className="w-full h-auto object-contain"
              />
              
              {/* 了解更多 - 隐藏 */}
              {/* <div className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200 text-left">
                了解更多 →
              </div> */}
            </div>
          </div>

          {/* 会议纪要 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
            <div className="flex flex-col h-full">
              {/* 图标和标题 */}
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/assets/meet.png" 
                  alt="会议纪要图标"
                  className="w-24 h-24 object-contain flex-shrink-0"
                />
                <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors duration-300 text-left">
                  {t('home.meetingMinutes')}
                </h3>
              </div>
              
              {/* 描述文字 */}
              <div className="flex-1 flex items-center mb-6">
                <p className="text-gray-600 leading-relaxed text-left">
                  {t('home.meetingMinutesDesc')}
                </p>
              </div>
              
              {/* 图片 */}
              <img 
                src="/assets/meeting.png" 
                alt="会议纪要"
                className="w-full h-auto object-contain"
              />
              
              {/* 了解更多 - 隐藏 */}
              {/* <div className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200 text-left">
                了解更多 →
              </div> */}
            </div>
          </div>

          {/* 金融大数据 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
            <div className="flex flex-col h-full">
              {/* 图标和标题 */}
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/assets/fin-data.png" 
                  alt="金融大数据图标"
                  className="w-24 h-24 object-contain flex-shrink-0"
                />
                <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors duration-300 text-left">
                  {t('home.financialBigData')}
                </h3>
              </div>
              
              {/* 描述文字 */}
              <div className="flex-1 flex items-center mb-6">
                <p className="text-gray-600 leading-relaxed text-left">
                  {t('home.financialBigDataDesc')}
                </p>
              </div>
              
              {/* 图片 */}
              <img 
                src="/assets/finance_data.png" 
                alt="金融大数据"
                className="w-full h-auto object-contain"
              />
              
              {/* 了解更多 - 隐藏 */}
              {/* <div className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200 text-left">
                了解更多 →
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreProducts

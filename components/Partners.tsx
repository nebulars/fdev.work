'use client'

import React, { useRef, useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import config from '../config/config.json'

interface Partner {
  name: string
  count: number
  icon: React.ReactNode
  shouldShow?: boolean
}

interface PartnerCase {
  icon: React.ReactNode
  title: string
  description: string
}

const Partners: React.FC = () => {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isResponsive, setIsResponsive] = useState(false)

  // 图标定义 - 保留所有图标定义
  const iconDefinitions = {
    brokerage: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
    publicFunds: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    privateFunds: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    banks: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    insurance: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V14H16V22H8V14H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V14H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
      </svg>
    ),
    asset: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5,6H23V18H5V6M14,9A3,3 0 0,1 17,12A3,3 0 0,1 14,12A3,3 0 0,1 14,9M9,8A2,2 0 0,1 11,10V14A2,2 0 0,1 9,16H1V14H9V10H1V8H9Z"/>
      </svg>
    )
  }

  // 根据配置生成合作伙伴数据
  const allPartners: Partner[] = config.partners.map((partnerConfig) => ({
    name: t(`partners.${partnerConfig.i18nKey}`),
    count: partnerConfig.count,
    icon: iconDefinitions[partnerConfig.i18nKey as keyof typeof iconDefinitions],
    shouldShow: partnerConfig.shouldShow
  }))

  // 根据配置过滤显示的合作伙伴
  const partners = allPartners.filter(partner => partner.shouldShow)

  // 合作案例数据 - 只保留一个
  const partnerCases: PartnerCase[] = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      title: t('partners.case1Title'),
      description: t('partners.case1Desc')
    }
  ]

  // 检查滚动状态和响应式状态
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
      
      // 检查是否为响应式状态（屏幕宽度小于1024px）
      setIsResponsive(window.innerWidth < 1024)
    }
  }

  // 滚动函数
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 240 // 卡片宽度 + 间距
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const handleResize = () => checkScrollButtons()
    const handleScroll = () => checkScrollButtons()
    
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // 格式化数字显示，支持个位数、两位数、三位数的适配
  const formatCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  // 根据数字位数计算字体大小
  const getCountFontSize = (count: number) => {
    const countStr = formatCount(count)
    if (countStr.length <= 2) {
      return 'text-4xl lg:text-5xl'
    } else if (countStr.length <= 3) {
      return 'text-3xl lg:text-4xl'
    } else {
      return 'text-2xl lg:text-3xl'
    }
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-8">
        {/* 标题 - 放在容器外面 */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
            {t('partners.title')}
          </h2>
        </div>

        {/* 主容器 */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
          {/* 合作伙伴展示区域 - 横向滚动卡片 */}
          <div className="relative">
            {/* 左侧导航箭头 */}
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* 右侧导航箭头 - 只在响应式状态下显示 */}
            {canScrollRight && isResponsive && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* 横向滚动容器 */}
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 justify-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow"
                >
                  {/* 图标 */}
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {partner.icon}
                  </div>
                  
                  {/* 数字显示 */}
                  <div className="text-3xl font-bold text-blue-500 mb-3">
                    {partner.count}
                  </div>
                  
                  {/* 企业类型 */}
                  <div className="text-sm font-medium text-gray-800">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 合作案例部分 */}
          <div className="mt-16">
            {/* 合作案例标题 */}
            <div className="text-center mb-12">
              <h3 className="text-lg lg:text-xl font-bold text-blue-900 mb-4">
                {t('partners.casesTitle')}
              </h3>
            </div>

            {/* 合作案例卡片 - 只显示一个 */}
            <div className="grid grid-cols-1 gap-8 w-full max-w-2xl mx-auto">
              {partnerCases.map((partnerCase, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-blue-100"
                >
                  {/* 图标和标题 */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      {partnerCase.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {partnerCase.title}
                      </h4>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {partnerCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
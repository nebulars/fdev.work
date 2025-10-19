'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import config from '../config/config.json'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-8 py-12">
        {/* 主要内容区域：分为左中右三部分 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-8">
          {/* 左侧：Logo + 公司信息 */}
          <div>
            {/* Logo和公司名称 */}
            <div className="relative mb-2 mt-4">
              <div className="inline-block bg-white rounded-lg">
                <Image
                  src="/assets/logo.png"
                  alt="Company Logo"
                  width={80}
                  height={0}
                  className="block rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold text-white leading-tight absolute" style={{left: '90px', top: '30px'}}>
                {t('footer.companyName')}
              </h3>
            </div>
            {/* 公司口号 */}
            <div>
              <p className="text-blue-100 leading-relaxed text-lg font-medium">
                {t('footer.companyDescription')}
              </p>
            </div>
          </div>

          {/* 中间：友情链接 */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">
              {t('footer.friendlyLinks')}
            </h4>
            <div className="space-y-3">
              <div>
                <a 
                  href={config.links.webPlatform}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  {t('footer.webPlatform')}
                </a>
              </div>
              <div>
                <Link 
                  href={config.links.mobileApp}
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  {t('footer.mobileApp')}
                </Link>
              </div>
            </div>
          </div>

          {/* 右侧：联系我们 */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-4">
              {t('footer.contactUs')}
            </h4>
            
            <div className="space-y-4">
              {/* 客服电话 */}
              <div className="flex items-start space-x-3">
                <div className="text-blue-300 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200">{t('footer.customerService')}</p>
                  <p className="text-lg font-semibold">18918379806</p>
                </div>
              </div>

              {/* 商务合作 */}
              <div className="flex items-start space-x-3">
                <div className="text-blue-300 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200">{t('footer.businessCooperation')}</p>
                  <p className="text-lg font-semibold">market@billionsintelligence.com</p>
                </div>
              </div>

              {/* 公司地址 */}
              <div className="flex items-start space-x-3">
                <div className="text-blue-300 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-blue-200">{t('footer.companyAddress')}</p>
                  <p className="text-lg font-semibold">{t('footer.address')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部区域：版权信息（左下角）、ICP备案号（中间）和微信公众号（右下角）在同一水平高度 */}
        <div className="flex justify-between items-center mt-8">
          {/* 版权信息 - 左下角 */}
          <div>
            <p className="text-blue-200 text-sm">
              © 2024 {t('footer.companyName')} {t('footer.allRightsReserved')}
            </p>
          </div>

          {/* ICP备案号 - 中间 */}
          <div>
            <a 
              href="https://beian.miit.gov.cn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 text-sm hover:text-white transition-colors duration-200"
            >
              {t('footer.icpNumber')}
            </a>
          </div>

          {/* 微信公众号 - 右下角 */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="relative w-32 h-32">
                <Image
                  src="/assets/public_account_qrcode.jpg"
                  alt="WeChat QR Code"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="pt-2">
              <p className="text-white text-sm font-medium">
                {t('footer.followWeChat')}
              </p>
              <p className="text-blue-100 text-xs">
                {t('footer.getLatestNews')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
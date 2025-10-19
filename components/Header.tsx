'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import config from '../config/config.json'

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage()
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.web'), href: config.links.webPlatform },
    { name: t('nav.mobile'), href: config.links.mobileApp },
    // { name: t('nav.bigData'), href: '#' }, // 隐藏
    // { name: t('nav.news'), href: '#' }, // 隐藏
  ]

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
  }

  const handleLanguageChange = (lang: 'zh' | 'en') => {
    setLanguage(lang)
    setIsLanguageDropdownOpen(false)
  }

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + 公司名称 */}
          <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
            <Image
              src="/assets/logo.png"
              alt={t('common.companyName')}
              width={64}
              height={64}
              className="h-16 w-16"
              priority
            />
            <div>
              <h1 className="text-xl text-gray-800">
                {t('common.companyName')}
              </h1>
            </div>
          </Link>

          {/* 右侧导航菜单和按钮区域 */}
          <div className="flex items-center space-x-8">
            {/* 导航菜单 */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('http') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* 关于我们和语言切换 */}
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('common.aboutUs')}
              </Link>
              <div className="relative" ref={dropdownRef}>
                <div 
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={toggleLanguageDropdown}
                >
                  <span className="text-gray-600">{t('common.language')}</span>
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                
                {/* 语言下拉菜单 */}
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <button
                        onClick={() => handleLanguageChange('zh')}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          language === 'zh' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                        }`}
                      >
                        中文
                      </button>
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          language === 'en' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                        }`}
                      >
                        English
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

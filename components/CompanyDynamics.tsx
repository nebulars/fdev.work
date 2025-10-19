'use client'

import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const CompanyDynamics: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
            {t('home.companyDynamics')}
          </h2>
        </div>

        <div className="space-y-12 max-w-17xl mx-auto">
          {/* 上排：最新动态和获奖与认证 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左上角：最新动态 */}
            <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-lg border-4 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('home.latestNews')}</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="text-gray-800">{t('home.news1')}</div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="text-gray-800">{t('home.news2')}</div>
                </div>
              </div>
            </div>

            {/* 右上角：获奖与认证 - 只保留技术实力 */}
            <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-lg border-4 border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('home.awardsRecognition')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-800">{t('home.tech1')}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-800">{t('home.tech2')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 下排：技术实力（占整行宽度） */}
          <div className="bg-white rounded-2xl p-10 lg:p-12 shadow-lg border-4 border-gray-200">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{t('home.technicalStrength')}</h3>
            </div>

            {/* 技术指标 - 4列布局 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">{t('home.aiModels')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">{t('home.financialDataSources')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-600">{t('home.professionalTerms')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">{t('home.systemReliability')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyDynamics

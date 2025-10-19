'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [showToast, setShowToast] = useState(false)
  const { t } = useLanguage()

  // 销售信息
  const salesInfo = {
    name: t('modal.salesName'),
    phone: '18918379806',
    email: 'litingting@billionsintelligence.com',
    // landline: '400-888-9999', // 公司固定电话 - 已删除
  }

  // 复制手机号
  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(salesInfo.phone)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }


  if (!isOpen) return null

  return (
    <>
      {/* 遮罩层 */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* 弹窗内容 */}
        <div 
          className="bg-white rounded-2xl p-6 w-full max-w-2xl relative shadow-2xl transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 关闭按钮 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 销售联系信息界面 */}
          <div className="bg-gray-50 rounded-xl">
            <div className="bg-gray-800 text-white p-4 rounded-t-xl -mx-6 -mt-6 mb-6">
              <h2 className="text-xl font-semibold text-center">{t('modal.applyTrial')}</h2>
            </div>
            
            <div className="space-y-4 p-6">
              <div className="flex gap-8 items-center">
                {/* 左侧：销售信息 */}
                <div className="w-1/2 space-y-4 text-gray-700 -ml-4">
                  <div className="flex items-center">
                    <span className="text-gray-500 w-16">{t('modal.name')}</span>
                    <span className="font-medium">{salesInfo.name}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-gray-500 w-16">{t('modal.mobile')}</span>
                    <span className="font-medium">{salesInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-gray-500 w-16">{t('modal.email')}</span>
                    <span className="font-medium text-sm">{salesInfo.email}</span>
                  </div>
                </div>

                {/* 中间虚线分隔 */}
                <div className="w-px h-32 bg-gray-200 border-l-2 border-dashed border-gray-300"></div>

                {/* 右侧：微信二维码 */}
                <div className="w-1/2 text-center">
                  <div>
                    <Image
                      src="/assets/salesqr.png"
                      alt="销售微信二维码"
                      width={500}
                      height={500}
                      className="mx-auto w-80 h-80"
                    />
                    <p className="text-gray-600 mt-2">{t('modal.wechatQR')}</p>
                  </div>
                </div>
              </div>

              {/* 复制手机号按钮 - 上移，椭圆形按钮 */}
              <div className="flex justify-center -mt-2">
                <button
                  onClick={copyPhoneNumber}
                  className="bg-blue-600 text-white py-3 px-12 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t('modal.copyPhone')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast 提示 */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {t('modal.phoneCopied')}
        </div>
      )}
    </>
  )
}

export default ApplyModal
'use client'

import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const DynamicMeta: React.FC = () => {
  const { t } = useLanguage()

  useEffect(() => {
    // 动态更新页面标题
    document.title = t('meta.title')
    
    // 动态更新页面描述
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'))
    } else {
      // 如果不存在描述标签，创建一个
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = t('meta.description')
      document.head.appendChild(newMetaDescription)
    }
  }, [t])

  return null
}

export default DynamicMeta

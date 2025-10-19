'use client'

import React from 'react'
import CoreProducts from '../CoreProducts'
import CompanyDynamics from '../CompanyDynamics'
import Partners from '../Partners'

export default function MainContent() {
  return (
    <>
      {/* 核心产品与服务 */}
      <CoreProducts />

      {/* 公司动态与技术实力 */}
      <CompanyDynamics />

      {/* 合作伙伴 */}
      <Partners />
    </>
  )
}

// import CategoryProducts from '@/components/CategoyProducts'
import CategoryProducts from '@/components/CategoyProducts'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import HeroSection from '@/components/HeroSection'
import React from 'react'

const CategoryPage = () => {
  return (
    <div>
        <HeroSection/>
      <CategoryProducts/>
      <GetInTouch/>
      <Footer/>

    </div>
  )
}

export default CategoryPage

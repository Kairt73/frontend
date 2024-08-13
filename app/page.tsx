import React from 'react'
import styles from './page.module.css'
import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import AboutUs from '@/components/AboutUs/AboutUs'
import Reasonschoose from '@/components/ReasonsToChoose/Reasonschoose'
import Conditions from '@/components/ConditionsOfEducation/Conditions'
import Footer from '@/components/Footer/Foooter'

const page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <Reasonschoose />
      <Conditions />
      <Footer />
    </div>
  )
}

export default page

import React from 'react'
import HeroSection from './_components/HeroSection'
import WhyAgileFlow from './_components/WhyAgileFlow'
import Features from './_components/Features'
import BestTeamWork from './_components/BestTeamWork'
import FortuneCompanies from './_components/FortuneCompanies'
import RobustFeatures from './_components/RobustFeatures'

const page = () => {
    return (
        <main>
            <HeroSection />
            <WhyAgileFlow />
            <Features />
            <BestTeamWork />
            <FortuneCompanies />
            <RobustFeatures />
        </main>
    )
}

export default page

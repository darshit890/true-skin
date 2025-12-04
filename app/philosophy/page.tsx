import React from 'react'
import Phero from './_components/Phero'
import PInfo from './_components/Pinfo'
import { IngredientsSection } from './_components/Ingredients'
import TPackaging from './_components/TPackaging'
import { IngredientShowcase } from './_components/Showcase'
import { Footer } from '@/components/Footer'
import FeaturesShowcase from './_components/PFeature'

const PhilosophyPage = () => {
  return (
    <>
    <Phero />
    <PInfo />
    <IngredientsSection />
    <TPackaging /> 
    <IngredientShowcase />
    <FeaturesShowcase />
    <Footer />
    </>
  )
}

export default PhilosophyPage
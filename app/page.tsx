"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import RecipeForm from "@/components/recipe-form"
import FeaturedProducts from "@/components/featured-products"
import WhyChooseUs from "@/components/why-choose-us"
import HealthInsurance from "@/components/health-insurance"
import Schedule from "@/components/schedule"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <RecipeForm />
      <FeaturedProducts />
      <WhyChooseUs />
      <HealthInsurance />
      <Schedule />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  )
}

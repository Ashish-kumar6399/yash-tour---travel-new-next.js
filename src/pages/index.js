import AboutSection from "@/components/Aboutsection"
import ServicesSection from "@/components/Aiportsection"
import BusBooking from "@/components/Busbooking"
import CarRentalCarousel from "@/components/CarCraousel"
import FeaturesSection from "@/components/FeaturesSection"
import TourPackagesSection from "@/components/Packages"
import VehicleShowcase from "@/components/Vehicleslider"
import Layout from "@/layout/Layout"


function index() {
  return (
    <Layout>
    <div>
        
       <CarRentalCarousel/>
        <FeaturesSection/>
        <AboutSection/>
        <VehicleShowcase/>
        <BusBooking/>
        <ServicesSection/>
        <TourPackagesSection/>
    </div>
    </Layout>
  )
}

export default index
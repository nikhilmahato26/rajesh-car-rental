import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactBar } from './components/ContactBar';
import { SloganBanner } from './components/SloganBanner';
import { FleetSection } from './components/FleetSection';
import { BookingSection } from './components/BookingSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutLocation } from './components/AboutLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EnquiryModal } from './components/EnquiryModal';
import type { Vehicle } from './types';
import { vehicles } from './data/fleetData';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVehicle, setModalVehicle] = useState<Vehicle | null>(null);

  const handleOpenBookingModal = (vehicleId?: string) => {
    if (vehicleId) {
      const found = vehicles.find((v) => v.id === vehicleId);
      setModalVehicle(found || vehicles[0]);
    } else {
      setModalVehicle(vehicles[0]);
    }
    setIsModalOpen(true);
  };

  const handleEnquireVehicle = (vehicle: Vehicle) => {
    setModalVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* Navigation Header */}
      <Header onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Hero Section */}
      <main id="main-content">
        <Hero onOpenBookingModal={() => handleOpenBookingModal('innova-crysta')} />

        {/* Business Contact Bar */}
        <ContactBar />

        {/* Slogan Banner */}
        <SloganBanner />

        {/* Vehicle Fleet Section */}
        <FleetSection onEnquireVehicle={handleEnquireVehicle} />

        {/* Interactive Booking & Enquiry Form */}
        <BookingSection initialVehicleId={modalVehicle?.id || 'innova-crysta'} />

        {/* Services & Popular Chhattisgarh Routes */}
        <ServicesSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Location & Poster Reference Details */}
        <AboutLocation />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Interactive Booking Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedVehicle={modalVehicle}
      />
    </div>
  );
}

export default App;

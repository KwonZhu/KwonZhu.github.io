import React from 'react';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

const Page = ({
  page,
}) => (
  <div className="pages">
    { page === 'HOME' && (<HomePage />) }
    { page === 'RESUME' && (<ResumePage />) }
    { page === 'SERVICES' && (<ServicesPage />) }
    { page === 'CONTACT' && (<ContactPage />) }
  </div>
);
export default Page;
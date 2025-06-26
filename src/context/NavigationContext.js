import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedProductArea, setSelectedProductArea] = useState('');
  const [industryName, setIndustryName] = useState('');
  const [productAreaName, setProductAreaName] = useState('');

  // Map navigation paths to industry keys
  const pathToIndustryMap = {
    '/retail': 'retail',
    '/food-beverage': 'foodBeverage',
    '/personal-services': 'personalServices',
    '/health-wellness': 'healthWellness',
    '/hospitality-tourism': 'hospitalityTourism'
  };

  // Map secondary nav labels to product area keys
  const labelToAreaMap = {
    'Retail POS Systems': 'pos_systems',
    'Barcode Scanners': 'barcode_scanners',
    'Receipt Printers': 'receipt_printers',
    'Cash Drawers': 'cash_drawers',
    'Credit Card Readers': 'credit_card_readers',
    'Inventory Management Software': 'inventory_management',
    
    'Restaurant POS Terminals': 'restaurant_pos',
    'Kitchen Display Systems': 'kitchen_display',
    'Order Management Tablets': 'order_tablets',
    'Payment Processing': 'payment_processing',
    'Menu Management Software': 'menu_management',
    'Mobile Ordering Apps': 'mobile_ordering',
    
    'Appointment Scheduling Software': 'appointment_software',
    'Client Management Systems': 'client_management',
    'Payment Processing Terminals': 'payment_terminals',
    'Digital Booking Platforms': 'booking_platforms',
    'Service Management Apps': 'service_management',
    'Customer Communication Tools': 'communication_tools',
    
    'Medical Practice Management': 'practice_management',
    'Electronic Health Records': 'ehr_systems',
    'Patient Check-in Kiosks': 'checkin_kiosks',
    'Telehealth Platforms': 'telehealth',
    'Billing and Insurance Software': 'billing_software',
    'Wellness Tracking Apps': 'wellness_apps',
    
    'Hotel Management Systems': 'hotel_management',
    'Online Booking Platforms': 'booking_platforms',
    'Property Management Software': 'property_management',
    'Guest Check-in Tablets': 'guest_checkin',
    'Revenue Management Tools': 'revenue_management',
    'Customer Experience Apps': 'experience_apps'
  };

  const setIndustryFromPath = (path) => {
    const industryKey = pathToIndustryMap[path];
    if (industryKey) {
      setSelectedIndustry(industryKey);
      // Clear product area when industry changes
      setSelectedProductArea('');
      setProductAreaName('');
    }
  };

  const setProductAreaFromLabel = (label) => {
    const areaKey = labelToAreaMap[label];
    if (areaKey) {
      setSelectedProductArea(areaKey);
      setProductAreaName(label);
    }
  };

  const clearSelections = () => {
    setSelectedIndustry('');
    setSelectedProductArea('');
    setIndustryName('');
    setProductAreaName('');
  };

  const value = {
    selectedIndustry,
    selectedProductArea,
    industryName,
    productAreaName,
    setSelectedIndustry,
    setSelectedProductArea,
    setIndustryName,
    setProductAreaName,
    setIndustryFromPath,
    setProductAreaFromLabel,
    clearSelections,
    pathToIndustryMap,
    labelToAreaMap
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

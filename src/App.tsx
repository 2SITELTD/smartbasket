
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './store';
import Layout from './components/Layout';
import { Login } from './components/auth/Login';
import { Signup } from './components/auth/Signup';
import { Home } from './pages/front/Home';
import About from './pages/front/About';
import Products from './pages/front/Products';
import Packages from './pages/front/Packages';
import Shop from './pages/front/Shop';
import { BusinessRegistrationForm } from './pages/front/BusinessRegistrationForm';
import PreferencesRestrictions from './components/front/questionaire/PrefernceRestrictions';
import AllergyQuestion from './components/front/questionaire/AllergyQuestion';
import ShippingQuestion from './components/front/questionaire/ShippingQuestion';
import {Main} from './pages/backoffice/Main';
import ProductDetail from './pages/front/ProductDetail';
import Cart from './pages/front/Cart';
import { CheckoutForm } from './components/front/checkout/CheckoutForm';
import { PaymentForm } from './components/front/checkout/PaymentForm';
import OredrConfirmation from './components/front/checkout/OrderConfirmation';
import Tracking from './pages/front/Tracking';
import { UserArea } from './pages/front/UserArea';
import {ProductInventory} from './pages/backoffice/ProductInventory';
import {ProductManagement} from './pages/backoffice/ProductManagement.tsx';
import {CategoryManagement} from './pages/backoffice/CategoryManagement.tsx';
import {PackageManagement} from './pages/backoffice/PackageManagement.tsx';
import {PackageEditor} from './pages/backoffice/PackageEditor.tsx';
import {EditPackage} from './pages/backoffice/EditPackage.tsx';
import { BackofficeHeader } from './components/backoffice/BackofficeHeader';
import Header from './components/Header';
import Footer from './components/Footer';

// Admin Layout component
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f5f5]">
      <BackofficeHeader />
      <main className="flex-grow p-4 max-w-[1104px] mx-auto items-center">
        {children}
      </main>
    </div>
  );
};

// Role-based route protector component
const ProtectedRoute: React.FC<{ children: React.ReactNode; requiresAdmin?: boolean }> = ({ 
  children, 
  requiresAdmin = false 
}) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  // In a real app, you'd check for admin role here too
  const isAdmin = true; // For now hardcoded to true for testing
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (requiresAdmin && !isAdmin) {
    return <Navigate to="/" />;
  }
  
  return <>{children}</>;
};

// Main App component with conditional routing
const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);
  // In a real app, you'd check the user role from your state
  const isAdmin = true; // For now hardcoded to true for testing
  const userId = "temp-user-id";
  
  // If the route starts with /backoffice, use admin layout regardless of user role
  const isBackofficeRoute = window.location.pathname.startsWith('/backoffice');
  
  // Determine if we should show admin layout (either backoffice route or admin user)
  const showAdminLayout = isBackofficeRoute && isAdmin;
  
  if (showAdminLayout) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/backoffice/main" element={<Main />} />
          <Route path="/backoffice/ProductInventory" element={<ProductInventory />} />
          <Route path="/backoffice/ProductManagement" element={<ProductManagement />} />
          <Route path="/backoffice/CategoryManagement" element={<CategoryManagement />} />
          <Route path="/backoffice/PackageManagement" element={<PackageManagement />} />
          <Route path="/backoffice/PackageEditor" element={
            <PackageEditor 
              packageName="" 
              sku="" 
              inventory={0} 
              smartBasketPrice={0} 
              purchasePrice={0} 
              marketPrice={0}
              tags={[]} 
              displayLocations={[]} 
              extendedDescription="" 
              shortDescription="" 
              products={[]} 
            />
          } />
          <Route path="/backoffice/EditPackage/:packageId" element={
            <EditPackage />
          } />
          <Route path="*" element={<Navigate to="/backoffice/main" replace />} />
        </Routes>
      </AdminLayout>
    );
  }
  
  // User layout for everything else
  return (
    <Layout userId={userId}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserArea />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/checkout/payment" element={<PaymentForm />} />
        <Route path="/checkout/confirmation" element={<OredrConfirmation />} />
        <Route path="/checkout/tracking" element={<Tracking />} />
        <Route path="/partners" element={<BusinessRegistrationForm />} />
        <Route path="/preferences" element={<PreferencesRestrictions />} />
        <Route path="/preferences/allergies" element={<AllergyQuestion />} />
        <Route path="/preferences/shipping" element={<ShippingQuestion />} />
        
        {/* Redirect to home if trying to access backoffice as non-admin */}
        <Route path="/backoffice/*" element={<Navigate to="/" replace />} />
        
        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

// Root App component
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;

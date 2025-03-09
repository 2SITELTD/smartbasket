
import React, { useEffect } from 'react';
import useFavorite from '../hooks/useFavorites';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  userId: string;
}

const Layout: React.FC<LayoutProps> = ({ children, userId }) => {
  const { loadUserFavorites } = useFavorite(userId);

  useEffect(() => {
    loadUserFavorites();
  }, [loadUserFavorites]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-[#f4f5f5]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

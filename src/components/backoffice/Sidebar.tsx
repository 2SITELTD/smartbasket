
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LayoutDashboard, Package, BoxesIcon, Tags, ShoppingCart, ClipboardList, Settings } from 'lucide-react';
import { Sheet, SheetContent } from '../ui/sheet';

interface SidebarProps {
  className?: string;
}

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Check if current route is active
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Sidebar navigation items
  const sidebarItems: SidebarItem[] = [
    {
      name: 'ראשי',
      path: '/backoffice/main',
      icon: <LayoutDashboard size={20} />
    },
    {
      name: 'ניהול מוצרים',
      path: '/backoffice/ProductManagement',
      icon: <ShoppingCart size={20} />
    },
    {
      name: 'מלאי מוצרים',
      path: '/backoffice/ProductInventory',
      icon: <BoxesIcon size={20} />
    },
    {
      name: 'ניהול קטגוריות',
      path: '/backoffice/CategoryManagement',
      icon: <ClipboardList size={20} />
    },
    {
      name: 'ניהול תגיות',
      path: '/backoffice/TagManagement',
      icon: <Tags size={20} />
    },
    {
      name: 'ניהול מארזים',
      path: '/backoffice/PackageManagement',
      icon: <Package size={20} />
    },
    {
      name: 'הגדרות',
      path: '/backoffice/settings',
      icon: <Settings size={20} />
    }
  ];

  // Desktop sidebar
  const DesktopSidebar = () => (
    <div 
      className={`h-screen bg-white flex flex-col border-l transition-all duration-300 
        ${isOpen ? 'w-64' : 'w-16'} ${className}`}
      onMouseEnter={() => !isOpen && setIsOpen(true)}
      onMouseLeave={() => !isOpen && setIsOpen(false)}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {isOpen && <h2 className="text-3xl font-semibold text-right">לוח בקרה</h2>}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          {isOpen ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
      
      <div className="flex flex-col p-3 space-y-2 flex-1 overflow-y-auto">
        {sidebarItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path}
            className={`flex items-center justify-end p-2 rounded-md transition-colors
              ${isActive(item.path) 
                ? 'bg-sky-100 text-sky-500' 
                : 'text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            {isOpen && (
              <span className="mr-3 whitespace-nowrap text-3xl text-right">{item.name}</span>
            )}
            <span className={`${!isOpen && 'mr-1'}`}>{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  // Mobile sidebar
  const MobileSidebar = () => (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="p-2 rounded-md bg-white shadow-md fixed top-4 right-4 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="right" title="ממשק ניהול" className="p-0 max-w-[270px]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold text-right">לוח בקרה</h2>
            </div>
            
            <div className="flex flex-col p-3 space-y-2 flex-1 overflow-y-auto">
              {sidebarItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-end p-2 rounded-md transition-colors
                    ${isActive(item.path) 
                      ? 'bg-sky-100 text-sky-500' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <span className="mr-3 whitespace-nowrap text-right">{item.name}</span>
                  <span>{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );

  return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
};

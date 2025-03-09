
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBasket, User, LayoutDashboard, Package, BoxesIcon, ClipboardList, BarChart3 } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const BackofficeHeader: React.FC = () => {
  const location = useLocation();
  
  // Check if current route is active
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const navItems: NavItem[] = [
    {
      name: 'ראשי',
      path: '/backoffice/main',
      icon: <LayoutDashboard size={20} />
    },
    {
      name: 'מלאי',
      path: '/backoffice/ProductInventory',
      icon: <BoxesIcon size={20} />
    },
    {
      name: 'דוחות',
      path: '/backoffice/reports',
      icon: <ClipboardList size={20} />
    },
    {
      name: 'מארזים',
      path: '/backoffice/PackageManagement',
      icon: <Package size={20} />
    },
    {
      name: 'דוחות זד',
      path: '/backoffice/z-reports',
      icon: <BarChart3 size={20} />
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b px-4 py-2 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - Basket Logo */}
        <div className="flex items-center">
          <img src="https://bucket.octopix-clients.xyz/header-logo.png" className=" text-sky-500" />
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors
                ${isActive(item.path)
                  ? 'bg-sky-100 text-sky-500'
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
            >
              {item.icon}
              <span className='text-2xl'>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right - Avatar */}
        <div className="flex items-center">
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="User profile"
          >
            <User className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

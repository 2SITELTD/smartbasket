
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, User } from 'lucide-react';
import './styles/Menu.css';
import { RootState } from '../store';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const firstName = useSelector((state: RootState) => state.user.userInfo.firstName);
  const lastName = useSelector((state: RootState) => state.user.userInfo.lastName);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate('/profile');
    onClose();
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6 text-[#05172C]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* User Section */}
          <div className="mt-12 mb-6 flex flex-col items-center">
            <button onClick={handleAvatarClick}>
              <User className="h-12 w-12 mb-2" />
            </button>
            {isAuthenticated ? (
              <span className="text-sm text-gray-600">{`${firstName} ${lastName}`}</span>
            ) : (
              <div className="space-y-2 w-full">
                <button 
                  onClick={() => handleNavigation('/login')}
                  className="block w-full py-2 text-center text-[#05172C] hover:text-[#00BAFF]"
                >
                  התחברות
                </button>
                <button 
                  onClick={() => handleNavigation('/signup')}
                  className="block w-full py-2 text-center bg-[#00BAFF] text-white rounded-lg hover:bg-[#0096CC]"
                >
                  הרשמה
                </button>
              </div>
            )}
          </div>

          {/* Cart Button */}
          <button 
            className="w-full py-2 flex items-center justify-center space-x-2 text-[#05172C] hover:text-[#00BAFF]"
            onClick={() => {
              console.log('Open cart popup');
              onClose();
            }}
          >
            <ShoppingCart className="h-6 w-6" />
            <span>עגלת קניות</span>
          </button>

          <nav className="mt-6 space-y-4">
            <button 
              onClick={() => handleNavigation('/')}
              className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
            >
              בית
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
            >
              אודות
            </button>
            <button 
              onClick={() => handleNavigation('/products')}
              className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
            >
              מוצרים
            </button>
            <button 
              onClick={() => handleNavigation('/packages')}
              className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
            >
              חבילות
            </button>
            <button 
              onClick={() => handleNavigation('/partners')}
              className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
            >
              ספקים
            </button>
          </nav>

          {isAuthenticated && (
            <div className="mt-6 space-y-4">
              <button 
                onClick={() => handleNavigation('/profile')}
                className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
              >
                הפרופיל שלי
              </button>
              <button 
                onClick={() => handleNavigation('/orders')}
                className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
              >
                ההזמנות שלי
              </button>
              <button 
                onClick={() => handleNavigation('/lists')}
                className="block w-full text-right py-2 text-[#05172C] hover:text-[#00BAFF]"
              >
                הרשימות שלי
              </button>
              <button 
                className="w-full text-right py-2 text-red-600 hover:text-red-700"
                onClick={onClose}
              >
                התנתק
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { User, ShoppingCart, Menu, Search } from 'lucide-react';
import MiniCart from './front/cart/MiniCart';
import { logout } from '../store/userSlice';
import { RootState } from '../app/store';
import { selectCartItems } from '../store/cartSlice';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Header: React.FC = () => {
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.user?.isAuthenticated);
  const userEmail = useSelector((state: RootState) => state.user?.userInfo.email);
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMiniCartOpen(!isMiniCartOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsSheetOpen(false);
  };

  const MenuContent = () => (
    <div className="flex flex-col h-full pt-12 bg-white">
      <div className="flex flex-col gap-6 px-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
            <User className="h-6 w-6" />
            <div className="text-sm">
              <p className="font-semibold">{userEmail}</p>
              <button onClick={() => {
                handleLogout();
                setIsSheetOpen(false);
              }} className="text-red-500 mt-2">
                התנתק
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pb-6 border-b border-gray-200">
            <button onClick={() => handleNavigate('/login')} className="text-[#05172C] hover:text-[#00BAFF] text-right">
              התחבר
            </button>
            <button onClick={() => handleNavigate('/signup')} className="text-[#05172C] hover:text-[#00BAFF] text-right">
              הרשמה
            </button>
          </div>
        )}
        
        <button onClick={() => handleNavigate('/')} className="text-[#05172C] hover:text-[#00BAFF] text-xl text-right">
          בית
        </button>
        <button onClick={() => handleNavigate('/about')} className="text-[#05172C] hover:text-[#00BAFF] text-xl text-right">
          אודות
        </button>
        <button onClick={() => handleNavigate('/shop')} className="text-[#05172C] hover:text-[#00BAFF] text-xl text-right">
          מוצרים
        </button>
        <button onClick={() => handleNavigate('/packages')} className="text-[#05172C] hover:text-[#00BAFF] text-xl text-right">
          חבילות
        </button>
        <button onClick={() => handleNavigate('/partners')} className="text-[#05172C] hover:text-[#00BAFF] text-xl text-right">
          ספקים
        </button>
      </div>
    </div>
  );

  return (
    <header className="bg-[#dfdfe2] shadow-md w-full">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Mobile Menu and Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="w-10 h-10 sm:w-[52px] sm:h-[52px] flex items-center justify-center hover:text-[#00BAFF] transition-colors bg-white rounded-full transform hover:scale-105 shadow-lg border border-gray-100">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" title="תפריט" className="w-[300px] p-0">
                <MenuContent />
              </SheetContent>
            </Sheet>
            
            <Link to="/" className="flex-shrink-0">
              <img 
                src="https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/header-logo.png" 
                alt="SmartBasket" 
                className="h-8 sm:h-12 lg:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 flex-grow justify-center max-w-3xl">
            <Link to="/" className="text-[#05172C] hover:text-[#00BAFF] text-base xl:text-[24px] relative group whitespace-nowrap">
              בית
              <div className="absolute left-0 right-0 bottom-[-8px] h-[5px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link to="/about" className="text-[#05172C] hover:text-[#00BAFF] text-base xl:text-[24px] relative group whitespace-nowrap">
              אודות
              <div className="absolute left-0 right-0 bottom-[-8px] h-[5px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link to="/shop" className="text-[#05172C] hover:text-[#00BAFF] text-base xl:text-[24px] relative group whitespace-nowrap">
              מוצרים
              <div className="absolute left-0 right-0 bottom-[-8px] h-[5px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link to="/packages" className="text-[#05172C] hover:text-[#00BAFF] text-base xl:text-[24px] relative group whitespace-nowrap">
              חבילות
              <div className="absolute left-0 right-0 bottom-[-8px] h-[5px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link to="/partners" className="text-[#05172C] hover:text-[#00BAFF] text-base xl:text-[24px] relative group whitespace-nowrap">
              ספקים
              <div className="absolute left-0 right-0 bottom-[-8px] h-[5px] bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden xl:flex items-center justify-center relative flex-shrink-0 ml-4 mr-4">
            <input
              type="text"
              placeholder="חפש מוצר"
              className="w-[280px] 2xl:w-[408px] h-[52px] px-4 py-2 border text-right pr-[112px] border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button 
              className="absolute right-0 flex items-center justify-center w-[60px] h-[50px] bg-[#00BAFF] rounded-r-full transition-transform hover:scale-105"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            {/* Cart Icon */}
            <div className="relative shopping-cart-container">
              <button 
                className="w-10 h-10 sm:w-[52px] sm:h-[52px] flex items-center justify-center hover:text-[#00BAFF] transition-colors bg-white rounded-full transform hover:scale-105 shadow-lg border border-gray-100"
                onClick={handleCartClick}
                style={{ 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transform: 'perspective(1000px) translateZ(0)'
                }}
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {totalItems > 0 && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-xs">
                    {totalItems}
                  </div>
                )}
              </button>
              {isMiniCartOpen && <MiniCart isOpen={isMiniCartOpen} onClose={() => setIsMiniCartOpen(false)} />}
            </div>

            {/* User Menu - Desktop only */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-10 h-10 sm:w-[52px] sm:h-[52px] flex items-center justify-center hover:text-[#00BAFF] transition-colors bg-white rounded-full transform hover:scale-105 shadow-lg border border-gray-100">
                    <User className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {isAuthenticated ? (
                    <>
                      <DropdownMenuItem className="text-right">
                        <span>{userEmail}</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-right" onSelect={() => navigate('/profile')}>
                        הפרופיל שלי
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-right" onSelect={() => navigate('/orders')}>
                        ההזמנות שלי
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-right" onSelect={handleLogout}>
                        התנתק
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem className="text-right" onSelect={() => navigate('/login')}>
                        התחבר
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-right" onSelect={() => navigate('/signup')}>
                        הרשמה
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

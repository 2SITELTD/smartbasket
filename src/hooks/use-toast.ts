import * as React from 'react';  // Add proper React import

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";  // Changed type to match shadcn/ui toast variants
}

interface ToastOptions {
  message: string;
  variant?: "default" | "destructive";
  duration?: number;
}

export const toast = ({ message, variant = "default", duration = 3000 }: ToastOptions) => {
  const id = Math.random().toString(36).slice(2);
  const newToast: Toast = {
    id,
    description: message,
    variant,
  };
  
  window.dispatchEvent(new CustomEvent('toast', { detail: newToast }));
};

export const useToast = () => {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const [isVisible, setIsVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState<"default" | "destructive">("default");

  const showToast = ({ message, variant = "default", duration = 3000 }: ToastOptions) => {
    setMessage(message);
    setVariant(variant);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, duration);
  };

  React.useEffect(() => {
    const handleToast = (event: CustomEvent<Toast>) => {
      setToasts((current) => [...current, event.detail]);
      
      setTimeout(() => {
        setToasts((current) => 
          current.filter((toast) => toast.id !== event.detail.id)
        );
      }, 3000);
    };

    window.addEventListener('toast' as any, handleToast as any);
    return () => window.removeEventListener('toast' as any, handleToast as any);
  }, []);

  return {
    isVisible,
    message,
    variant,
    showToast,
    toasts,
  };
};
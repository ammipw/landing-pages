"use client"

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose?: () => void, children?: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  
  // Don't render anything on the server
  if (!mounted) return null;

  if (!isOpen) return null;
  
  return createPortal(
    // The Backdrop: Anchored to the viewport, handles dimming and close-on-click
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* The Modal Card: Halts click propagation so clicking inside doesn't close it */}
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body // Renders cleanly at the root of the document
  );
}
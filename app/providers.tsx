'use client';

import { useEffect } from 'react';

export function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initBootstrap = async () => {
      try {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      } catch (error) {
        console.error('Error loading Bootstrap:', error);
      }
    };
    
    initBootstrap();
  }, []);

  return <>{children}</>;
}
'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    
    initBootstrap();
  }, []);

  return <>{children}</>;
}
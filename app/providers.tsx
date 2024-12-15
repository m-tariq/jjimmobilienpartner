'use client';

import { useEffect } from 'react';

export function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    loadBootstrap();
  }, []);

  return <>{children}</>;
}
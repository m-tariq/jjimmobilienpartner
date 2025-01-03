"use client"
import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       require('bootstrap/dist/js/bootstrap.bundle.min.js');
//     }
//   }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div 
      className="position-fixed bottom-0 start-0 end-0 p-3"
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        <div 
          className="bg-white shadow p-4"
          style={{ 
            borderRadius: '16px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <div className="d-flex justify-content-between align-items-center gap-4">
            {/* Cookie Icon and Text */}
            <div className="d-flex align-items-center gap-4">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                style={{ 
                  backgroundColor: '#f0f0ff',
                  width: '44px',
                  height: '44px'
                }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="#6366f1"
                >
                  <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM8 9C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9ZM16 9C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9ZM12 13C13.1046 13 14 13.8954 14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13Z"/>
                </svg>
              </div>
              <div>
                <h5 className="mb-1 fw-bold" style={{ fontSize: '1.25rem' }}>We use cookies</h5>
                <p className="mb-0" style={{ fontSize: '0.95rem', color: '#4B5563' }}>
                  Please accept our cookies so we can provide the best experience.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 flex-shrink-0">
              <button 
                type="button" 
                className="btn btn-outline-secondary"
                onClick={handleDecline}
                style={{ 
                  borderRadius: '8px',
                  padding: '8px 20px',
                  fontSize: '0.95rem',
                  minWidth: '100px'
                }}
              >
                Decline
              </button>
              <button 
                type="button" 
                className="btn"
                onClick={handleAccept}
                style={{ 
                  backgroundColor: '#6366f1',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  fontSize: '0.95rem',
                  minWidth: '100px'
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
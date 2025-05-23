'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>
            Something went wrong!
          </h2>
          {error.message && (
            <p style={{ marginBottom: '16px', color: '#666' }}>
              Error: {error.message}
            </p>
          )}
          <button
            onClick={() => reset()}
            style={{
              padding: '10px 20px',
              fontSize: '1rem',
              color: '#fff',
              backgroundColor: '#0070f3',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

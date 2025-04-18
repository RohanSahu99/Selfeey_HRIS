// src/utils/withAuth.js

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.replace('/signup');
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp <= currentTime) {
          router.replace('/signup');
        }
      } catch (error) {
        router.replace('/signup');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;

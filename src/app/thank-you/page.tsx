import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <CheckCircleIcon className="h-16 w-16 text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">Thank You!</h1>
        <p className="text-gray-700 text-center mb-6">
          We appreciate you reaching out. Our team will get back to you as soon as possible.<br />
          In the meantime, feel free to explore more about Zero to Nine Marketing.
        </p>
        <Link href="/">
          <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">Back to Home</span>
        </Link>
      </div>
    </div>
  );
} 
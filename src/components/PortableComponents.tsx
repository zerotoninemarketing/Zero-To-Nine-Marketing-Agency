import Image from 'next/image';
import { PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/lib/sanityImage';

export const PortableComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value).auto('format').url();
      const alt = value.alt || 'Blog image';
      const size = value.size || 'medium'; // fallback

      const sizeClasses: Record<string, string> = {
        small: 'w-48',
        medium: 'w-80',
        large: 'w-[600px]',
        full: 'w-full',
      };

      return (
        <div className={`my-8 ${sizeClasses[size] || 'w-full'}`}>
          <img
            src={imageUrl}
            alt={alt}
            className="rounded-lg mx-auto"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold my-3">{children}</h4>,
    normal: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
  },
};
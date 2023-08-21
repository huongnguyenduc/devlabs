import './globals.css';
import { ReactNode } from 'react';
import { Urbanist } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import { Toaster } from '@devlabs/ui/src/toaster';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Ecommerce Store',
  description: 'Ecommerce Store',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Toaster position="top-center" swipeDirection="up" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

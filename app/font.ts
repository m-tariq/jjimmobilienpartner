// app/fonts.ts
import { Inter, Raleway, Poppins, Lato, Nunito } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
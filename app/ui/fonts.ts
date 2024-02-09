import { Cormorant_Garamond } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['cyrillic'], weight: '500' });
export const garamond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '500',
});

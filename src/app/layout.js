
import "./globals.css";
import { Raleway } from 'next/font/google'
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body style={{backgroundColor:'#ebf5f4'}}>      
       {children}
      </body>
    </html>
  );
}

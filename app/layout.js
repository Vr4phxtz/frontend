'use client';

import { usePathname } from 'next/navigation';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});



export default function RootLayout({ children }) {
  const pathname = usePathname(); // ✅ ใช้ตรวจ path
  const hideLayout = pathname === '/register'; // ✅ ตรวจว่าหน้า register ไหม

  return (
    <html lang="th">
      <body className={prompt.className}>
        <Navigation />
        
        {children}
        
        {!hideLayout && <Footer />} {/* ✅ ซ่อน Footer เช่นกัน */}
      </body>
    </html>
  );
}

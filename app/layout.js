
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Prompt } from 'next/font/google';
import Footer from "./components/Footer";


const prompt = Prompt({
  subsets: ['thai', 'latin'], // รองรับภาษาไทย
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Vr4phxtz',
  description: 'เว็บไซต์ที่ใช้ฟอนต์ Prompt',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className={prompt.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
    
  );
}
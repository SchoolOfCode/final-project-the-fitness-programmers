import "./globals.css";
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';
import { Toaster } from 'react-hot-toast';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Toaster />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}

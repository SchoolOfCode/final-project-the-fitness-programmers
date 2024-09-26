import "./globals.css";
import Nav from './components/Nav';
import BottomNav from './components/BottomNav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

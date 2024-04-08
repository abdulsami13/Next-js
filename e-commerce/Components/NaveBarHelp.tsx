"use client";

import { usePathname } from 'next/navigation'; // Import usePathname hook
import NavBar from './Navbar';

export default function MainContainer({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current pathname
  const isEditRoute = pathname.includes('/Edit');
  // Check if the route starts with '/Edit'

  
console.log(isEditRoute)
  return (
    <main className={`main-container ${isEditRoute ? 'flex flex-row' : ''}`}>
            <header>
            <NavBar/>   
          </header>
          <div>

      {children}
          </div>
    </main>
  );
}

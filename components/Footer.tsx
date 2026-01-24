
import React from 'react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer id="footer" className="relative z-10 bg-brand-dark/50 py-12 text-center text-white/60">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-8 mb-6">
          <a href="https://www.instagram.com/srcas_csda?igsh=NDRhcmhzcXluZTFk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand-amber transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.264 0-3.58.013-4.823.07-2.61.12-3.832 1.32-3.95 3.95-.057 1.242-.069 1.558-.069 4.823s.012 3.58.069 4.823c.118 2.632 1.34 3.83 3.95 3.95 1.243.057 1.559.069 4.823.069s3.58-.012 4.823-.069c2.61-.12 3.832-1.318 3.95-3.95.057-1.243.069-1.559.069-4.823s-.012-3.58-.069-4.823c-.118-2.632-1.34-3.83-3.95-3.95C15.58 3.978 15.264 3.965 12 3.965zM12 9.682a4.318 4.318 0 100 8.636 4.318 4.318 0 000-8.636zm0 6.834a2.516 2.516 0 110-5.032 2.516 2.516 0 010 5.032zm5.4-7.85a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
            </svg>
          </a>
          <a href="mailto:synaltica@gmail.com" aria-label="Email" className="hover:text-brand-amber transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <button onClick={onContactClick} className="hover:text-brand-amber transition-colors cursor-pointer">Contact Us</button>
        </div>
        <p>&copy; 2026 SYNALTICA '26. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

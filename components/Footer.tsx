
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
          <a href="https://chat.whatsapp.com/DUYtMpQr6eG9jAID1PbhgT?mode=gi_t" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Group" className="hover:text-brand-amber transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

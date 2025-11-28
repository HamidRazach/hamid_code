'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhatsAppIcon = () => {
  return (
    <div
      style={{
        position: 'fixed',
        left: '1.5rem',
        bottom: '1.5rem',
        zIndex: 999,
      }}
    >
      <Link
        href="https://wa.me/+923086582833"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="whatsapp"
      >
        <Image
          src="/images/whattapp-icon/whatsapp.svg"
          alt="WhatsApp"
          width={65}
          height={65}
        />
      </Link>
    </div>
  );
};

export default WhatsAppIcon;

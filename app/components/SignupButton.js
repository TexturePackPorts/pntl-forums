'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from '../page.module.css';

export default function SignupButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link href={`/${session.user.name}`}>
        <img
              src={session.user.image}
              alt={session.user.name}
              style={{ borderRadius: '50%', width: '50px', height: '50px' }}
            />
        </Link>
        <button onClick={() => signOut({ callbackUrl: '/' })} className={styles.register}>Sign Out</button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn('discord')} className={styles.register}>
      Sign Up
    </button>
  );
}

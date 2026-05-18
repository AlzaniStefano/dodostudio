'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mostra il loader per 3 secondi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <h2>Caricamento in corso...</h2>
    </div>
  );
}

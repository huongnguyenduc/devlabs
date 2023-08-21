'use client';
import { Fragment, useEffect, useState } from 'react';
import { PreviewModal } from '@/components/preview-modal';

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Fragment>
      <PreviewModal />
    </Fragment>
  );
}

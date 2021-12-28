import React, { useRef, useEffect } from 'react';
import ScrollBar from 'react-smooth-scrollbar';
import { useLocation } from 'react-router-dom';

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const { scrollBar } = ref.current;
    scrollBar.setPosition(0, 0);
  }, [pathname]);
  return (
    <ScrollBar ref={ref} damping=".09">
      {children}
    </ScrollBar>
  );
}

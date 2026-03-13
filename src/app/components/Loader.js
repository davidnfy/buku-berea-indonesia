"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  );
}
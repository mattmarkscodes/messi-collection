"use client";

import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function ZoomableImage({ src, alt }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    // Prevent background scroll while lightbox is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="zoomButton"
        onClick={() => setIsOpen(true)}
        aria-label={`Open image: ${alt}`}
      >
        <img className="zoomImg" src={src} alt={alt} loading="lazy" />

      </button>

		{isOpen && (
		  <div
			className="lightbox"
			role="dialog"
			aria-modal="true"
			onClick={() => setIsOpen(false)}
		  >
			<div className="lightboxStage" onClick={(e) => e.stopPropagation()}>
			  <img className="lightboxImg" src={src} alt={alt} />
			</div>

			<button
			  className="lightboxClose"
			  onClick={(e) => {
				e.stopPropagation();
				setIsOpen(false);
			  }}
			  aria-label="Close"
			  type="button"
			>
			  ×
			</button>
		  </div>
		)}

    </>
  );
}




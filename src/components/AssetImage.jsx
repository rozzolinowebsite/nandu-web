import { useState } from 'react';

function fileNameFromSrc(src) {
  const parts = src.split('/');
  return parts[parts.length - 1] || src;
}

export default function AssetImage({
  src,
  alt,
  className = '',
  placeholderHint,
  loading = 'lazy',
  sizes,
}) {
  const [failed, setFailed] = useState(false);
  const fileName = fileNameFromSrc(src);
  const hint = placeholderHint ?? fileName;

  if (failed) {
    return (
      <div
        className={`asset-placeholder ${className}`.trim()}
        role="img"
        aria-label={alt}
      >
        <span className="asset-placeholder__icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <rect
              x="8"
              y="10"
              width="32"
              height="28"
              rx="4"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="18" cy="20" r="3" fill="currentColor" opacity="0.4" />
            <path
              d="M8 34l10-12 8 8 6-6 8 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="asset-placeholder__label">Añade tu foto</span>
        <code className="asset-placeholder__file">public/images/{hint}</code>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      sizes={sizes}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

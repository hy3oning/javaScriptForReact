import "./ImageModal.css";

export default function ImageModal({ imageUrl, alt = "preview", closeFn }) {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className="image-modal-overlay" onClick={closeFn}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="image-modal-close" onClick={closeFn}>
          X
        </button>
        <img src={imageUrl} alt={alt} className="image-modal-img" />
      </div>
    </div>
  );
}

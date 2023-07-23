import './ImageAPage.css';
import imageA from './video/ImageA.mp4';

function ImageAPage() {
  return (
    <div>
      {/* Your content for Image A page */}
      <h2>Image A Page</h2>
      <video autoPlay controls>
        {/* Use the 'imageA' variable as the source for the video */}
        <source src={imageA} type="video/mp4" />
        {/* Add more <source> tags for other video formats (e.g., WebM, Ogg) if needed */}
      </video>
      <button className="book-button">Book This Movie</button>
    </div>
  );
}

export default ImageAPage;

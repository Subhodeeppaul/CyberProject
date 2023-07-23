import './ImageAPage.css';

function ImageAPage() {
  return (
    <div>
      {/* Your content for Image A page */}
      <h2>Image A Page</h2>
      <video autoPlay controls>
        {/* Replace 'path/to/your/video.mp4' with the correct path to your video file */}
        <source src="/video/video.mp4" type="video/mp4" />
        {/* Add more <source> tags for other video formats (e.g., WebM, Ogg) if needed */}
      </video>
      <button className="book-button">Book This Movie</button>
    </div>
  );
}

export default ImageAPage;
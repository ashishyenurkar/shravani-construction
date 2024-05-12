import './SliderBanner.css'; // Import CSS file for styling

function SliderBanner() {
  return (
    <div className="home">
      <div className="slider">
        <div className="slide" style={{ backgroundImage: `url('https://cdnassets.hw.net/55/07/0d2c353347b5b1d19c340371b5de/construction.jpg')` }}></div>
        <div className="slide" style={{ backgroundImage: `url('https://www.zelayacompanies.com/wp-content/uploads/2018/02/residential-construction-Image .jpg')` }}></div>
        <div className="slide" style={{ backgroundImage: `url('https://www.wallpapertip.com/wmImage s/92-929182_construction-site-high-resolution.jpg')` }}></div>
      </div>
      <div className="content">
        <h2>Welcome to Shravani Construction Pvt Ltd</h2>
        <p>Your trusted partner in civil construction projects</p>
      </div>
    </div>
  );
}

export default SliderBanner;

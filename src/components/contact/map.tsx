function Map() {
  return (
    <div className="map-section">
      <div className="container">
        <div className="rwo">
          <div className="col-lg-12">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11696.69454111215!2d12.006652761591715!3d42.869179138398394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13294b13278a75b7%3A0x6a8aac77f12b905c!2sCasa%20Vacanze%20Il%20Poggio!5e0!3m2!1sen!2skr!4v1743746249537!5m2!1sen!2skr"
                width="1320"
                height="560"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;

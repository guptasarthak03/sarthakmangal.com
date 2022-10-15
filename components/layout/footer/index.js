const Footer = () => {
  return (
    <div class="container footer-container">
      <div class="footerbrand">
        <p class="footerbrand-heading">Portfolio</p>
        <p>Sarthak Mangal</p>
      </div>
      <div class="page-links">
        <p class="footer-heading">Helpful Links</p>
        <p class="footer-page-links">Home</p>
        <p class="footer-page-links">About</p>
        <p class="footer-page-links">Projects</p>
        <p class="footer-page-links">Blogs</p>
      </div>
      <div class="contact">
        <p class="footer-heading">Contact</p>
        <p>guptasarthak03@gmail.com</p>
        <p>Gurugram, India</p>
      </div>
      <div class="social-handle">
        <div>
          <a
            href="https://www.linkedin.com/in/sarthak-gupta-b64480102/"
            target="_blank"
          >
            <img
              class="social-icon"
              src="/images/icon-linkedin.svg"
              alt="linkedIn"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/guptasarthak03" target="_blank">
            <img
              class="social-icon"
              src="/images/icon-github.svg"
              alt="github"
            />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/developermangal" target="_blank">
            <img
              class="social-icon"
              src="/images/icon-twitter.svg"
              alt="twitter"
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/sarthak_mangal/" target="_blank">
            <img
              class="social-icon"
              src="/images/icon-insta.svg"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

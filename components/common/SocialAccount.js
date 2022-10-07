const SocialAccount = ({ source, platform }) => {
  return (
    <div class="account-handle">
      <a href={source} target="_blank">
        <img
          className="social-icon"
          src={`/images/icon-${platform}.svg`}
          alt={platform}
        />
      </a>
    </div>
  );
};

export default SocialAccount;

import { useState } from 'react';

const SocialAccount = ({
  source,
  name,
  isWhite = false,
  onHoverPrimary = false,
  styleConfig = {},
  hoverConfig = {},
}) => {
  // style config for white color
  styleConfig = isWhite
    ? {
        ...styleConfig,
        filter:
          'invert(100%) sepia(0%) saturate(7460%) hue-rotate(169deg) brightness(108%) contrast(95%)',
      }
    : { ...styleConfig };

  hoverConfig = onHoverPrimary
    ? {
        ...hoverConfig,
        filter:
          'invert(41%) sepia(54%) saturate(5853%) hue-rotate(179deg) brightness(94%) contrast(98%)',
      }
    : { ...hoverConfig };

  const [hoverState, setHoverState] = useState(false);

  return (
    <div class="account-handle">
      <a href={source} target="_blank">
        <img
          className="social-icon"
          src={`/images/icon-${name}.svg`}
          alt={name}
          style={!hoverState ? styleConfig : { ...styleConfig, ...hoverConfig }}
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
        />
      </a>
    </div>
  );
};

export default SocialAccount;

import SocialAccount from '../../common/SocialAccount';
import { socialHandleList } from '../../constants/common';

const SocialHandle = ({
  children,
  isWhite = false,
  onHoverPrimary = false,
}) => {
  return (
    <div className="social-handle">
      <div className="left-container">
        {socialHandleList.map(account => {
          return (
            <SocialAccount
              key={account.name}
              source={account.path}
              name={account.name}
              isWhite={isWhite}
              onHoverPrimary={onHoverPrimary}
            />
          );
        })}
      </div>

      {children}
    </div>
  );
};

export default SocialHandle;

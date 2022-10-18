import SocialAccount from '../../common/SocialAccount';
import { socialHandleList } from '../../constants/common';

const SocialHandle = ({
  children,
  isWhite = false,
  onHoverPrimary = false,
}) => {
  return (
    <div className="social-handle">
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
      {children}
    </div>
  );
};

export default SocialHandle;

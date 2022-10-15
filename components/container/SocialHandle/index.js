import SocialAccount from '../../common/SocialAccount';
import { socialHandleList } from '../../constants/common';

const SocialHandle = ({ children }) => {
  return (
    <div className="social-handle">
      {socialHandleList.map(account => {
        return <SocialAccount source={account.path} name={account.name} />;
      })}
      {children}
    </div>
  );
};

export default SocialHandle;

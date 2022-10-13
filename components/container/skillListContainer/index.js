import SkillItem from './SkillItem';
import { skillItemList } from '../../constants/homepage';

const SkillListContainer = ({ partition }) => {
  return (
    <div className="skill-items">
      {skillItemList
        .filter(skill => skill.partition == partition)
        .map(skill => {
          return (
            <SkillItem key={skill.name} name={skill.name} title={skill.title} />
          );
        })}
    </div>
  );
};

export default SkillListContainer;

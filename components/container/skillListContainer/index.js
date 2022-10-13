import SkillItem from './SkillItem';
import { skillItemsList } from '../../constants/homepage';

const SkillListContainer = ({ partition }) => {
  return (
    <div className="skill-items">
      {skillItemsList
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

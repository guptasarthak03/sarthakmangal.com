import ProjectCard from './projectCard';
import { projectCardList } from '../../constants/homepage';

const ProjectsContainer = () => {
  // custom inline style for icon
  const projectIconStyleConfig = {
    width: '2.3rem',
    border: '1px solid rgba(0,0,0,0.3)',
    borderRadius: '5px',
  };

  const projectIconHoverConfig = {
    filter:
      'invert(41%) sepia(54%) saturate(5853%) hue-rotate(179deg) brightness(94%) contrast(98%)',
  };

  return (
    <div className="project-items">
      {projectCardList.map(card => {
        return (
          <ProjectCard
            bgPath={card.bgPath}
            title={card.title}
            desc={card.desc}
            codePath={card.codePath}
            previewPath={card.previewPath}
            iconStyleConfig={projectIconStyleConfig}
            iconHoverConfig={projectIconHoverConfig}
          />
        );
      })}
    </div>
  );
};

export default ProjectsContainer;

import ProjectCard from './projectCard';

const ProjectsContainer = ({ projectCardList }) => {
  // custom inline style for icon
  const projectIconStyleConfig = {
    width: '2.3rem',
    border: '1px solid rgba(0,0,0,0.3)',
    borderRadius: '5px',
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
            onHoverPrimary={true}
          />
        );
      })}
    </div>
  );
};

export default ProjectsContainer;

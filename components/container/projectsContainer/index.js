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
            key={card.title}
            imgPath={card.imgPath}
            title={card.title}
            desc={card.desc}
            tech={card.tech}
            codeUrl={card.codeUrl}
            previewUrl={card.previewUrl}
            iconStyleConfig={projectIconStyleConfig}
            onHoverPrimary={true}
          />
        );
      })}
    </div>
  );
};

export default ProjectsContainer;

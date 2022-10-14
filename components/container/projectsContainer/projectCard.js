import SocialAccount from '../../common/SocialAccount';

const ProjectCard = ({
  bgPath,
  title,
  desc,
  codePath,
  previewPath,
  iconStyleConfig,
  iconHoverConfig,
}) => {
  return (
    <div className="project-item" style={{ backgroundImage: `url(${bgPath})` }}>
      <div className="content">
        <p className="heading">{title}</p>
        <p className="description">{desc}</p>
        <div className="projects-cta">
          <SocialAccount
            source={codePath}
            name="code"
            isWhite={true}
            styleConfig={iconStyleConfig}
            hoverConfig={iconHoverConfig}
          />
          <SocialAccount
            source={previewPath}
            name="preview"
            isWhite={true}
            styleConfig={iconStyleConfig}
            hoverConfig={iconHoverConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

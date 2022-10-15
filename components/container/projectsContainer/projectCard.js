import SocialAccount from '../../common/SocialAccount';

const ProjectCard = ({
  bgPath,
  title,
  desc,
  codePath,
  previewPath,
  iconStyleConfig,
  onHoverPrimary,
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
            onHoverPrimary={onHoverPrimary}
          />
          <SocialAccount
            source={previewPath}
            name="preview"
            isWhite={true}
            styleConfig={iconStyleConfig}
            onHoverPrimary={onHoverPrimary}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

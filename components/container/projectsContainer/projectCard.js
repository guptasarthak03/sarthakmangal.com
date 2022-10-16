import SocialAccount from '../../common/SocialAccount';

const ProjectCard = ({
  imgPath,
  title,
  desc,
  tech,
  codeUrl,
  previewUrl,
  iconStyleConfig,
  onHoverPrimary,
}) => {
  return (
    <div
      className="project-item"
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <div className="content">
        <p className="heading">{title}</p>
        <p className="description">{desc}</p>
        <p className="tech-stack">Tech : {tech}</p>
        <div className="projects-cta">
          <SocialAccount
            source={codeUrl}
            name="code"
            isWhite={true}
            styleConfig={iconStyleConfig}
            onHoverPrimary={onHoverPrimary}
          />
          <SocialAccount
            source={previewUrl}
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

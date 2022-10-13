const SkillItem = ({ name, title }) => {
  return (
    <div className="skill-item">
      <img src={`/images/${name}.svg`} alt={name} />
      <p>{title}</p>
    </div>
  );
};

export default SkillItem;

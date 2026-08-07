import { skills } from '../data'
import { CameraIcon, VideoIcon } from './CameraIcon'

export function Skills() {
  return (
    <section id="skills" className="section section--tinted">
      <div className="section__inner">
        <h2 className="section__title">
          <span className="section__title-accent">Skills</span> スキル
        </h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className={`skill-card__icon skill-card__icon--${skill.category}`}>
                {skill.category === 'photo' ? <CameraIcon /> : <VideoIcon />}
              </div>
              <p className="skill-card__name">{skill.name}</p>
              <div className="skill-card__bar">
                <div
                  className={`skill-card__bar-fill skill-card__bar-fill--${skill.category}`}
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

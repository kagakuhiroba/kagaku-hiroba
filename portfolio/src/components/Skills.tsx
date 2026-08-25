import { skills } from '../data'
import { CameraIcon, VideoIcon } from './CameraIcon'
import { CornerSplash } from './InkSplatter'
import { useInView } from '../hooks/useInView'

export function Skills() {
  const { ref, visible } = useInView<HTMLDivElement>()

  return (
    <section id="skills" className="section section--tinted">
      <CornerSplash position="skills" color="blue" size={500} variant="b" rotate={18} />
      <CornerSplash position="skills-alt" color="orange" size={250} variant="a" rotate={-25} />
      <CornerSplash position="skills-top" color="orange" size={205} variant="c" rotate={50} />
      <div ref={ref} className={`section__inner fade-scroll${visible ? ' fade-scroll--visible' : ''}`}>
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

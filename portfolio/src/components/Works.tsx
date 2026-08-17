import { useState } from 'react'
import { workCategories, works, type WorkCategory } from '../data'
import { CameraIcon, VideoIcon } from './CameraIcon'
import { CornerSplash } from './InkSplatter'

export function Works() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('すべて')

  const filteredWorks = works.filter(
    (work) => activeCategory === 'すべて' || work.category === activeCategory,
  )

  return (
    <section id="works" className="section">
      <CornerSplash position="works" color="blue" size={260} />
      <div className="section__inner">
        <h2 className="section__title">
          <span className="section__title-accent">Works</span> 作品・実績
        </h2>
        <div className="works__filter">
          {workCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`works__filter-button${activeCategory === category ? ' works__filter-button--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="works-grid">
          {filteredWorks.map((work) => (
            <article className="work-card" key={work.title}>
              <div className={`work-card__thumb work-card__thumb--${work.accent}`}>
                {work.category === '写真' ? <CameraIcon /> : <VideoIcon />}
              </div>
              <div className="work-card__body">
                <h3>{work.title}</h3>
                <div className="work-card__tags">
                  {work.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="works__note">※ 画像は準備中のため、現在はプレースホルダーを表示しています。</p>
      </div>
    </section>
  )
}

import { sections } from '../data/sections';

export default function SiteNav() {
  return (
    <header className="site-nav">
      <a className="site-nav__brand" href="#top">
        歌楽ひろば
      </a>
      <nav className="site-nav__links" aria-label="ページ内ナビゲーション">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

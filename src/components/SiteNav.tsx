import { logoImage, navSplatterBg, sections } from '../data/sections';

export default function SiteNav() {
  return (
    <header className="site-nav" style={{ backgroundImage: `url(${navSplatterBg})` }}>
      <a className="site-nav__brand" href="#top">
        <img className="site-nav__logo" src={logoImage.src} alt="歌楽ひろば" />
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

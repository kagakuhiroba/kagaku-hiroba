const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#works', label: 'Works' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="#top">
          sumi <span>channel</span>
        </a>
        <nav className="header__nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

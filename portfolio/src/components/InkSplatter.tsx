export function InkSplatterDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <g id="ink-cluster">
          <circle cx="0" cy="0" r="30" />
          <circle cx="35" cy="-12" r="23" />
          <circle cx="-30" cy="14" r="21" />
          <circle cx="12" cy="34" r="19" />
          <circle cx="-16" cy="-32" r="17" />
          <circle cx="44" cy="22" r="14" />
          <circle cx="-42" cy="-8" r="13" />
          <circle cx="22" cy="-40" r="12" />
          <circle cx="2" cy="48" r="11" />
          <circle cx="50" cy="-26" r="9" />
          <circle cx="-46" cy="32" r="9" />
          <circle cx="6" cy="6" r="25" />
        </g>
        <g id="ink-drip">
          <circle cx="0" cy="0" r="7" />
          <circle cx="16" cy="15" r="4.5" />
          <circle cx="27" cy="28" r="2.8" />
          <ellipse cx="37" cy="39" rx="2" ry="3" />
        </g>
        <g id="ink-dots">
          <circle cx="0" cy="0" r="3.2" />
          <circle cx="16" cy="9" r="2.1" />
          <circle cx="-11" cy="19" r="1.6" />
          <circle cx="27" cy="-13" r="2.6" />
          <circle cx="-24" cy="-7" r="1.9" />
          <circle cx="9" cy="-22" r="1.3" />
          <circle cx="38" cy="6" r="1.6" />
          <circle cx="-6" cy="30" r="1.4" />
        </g>
      </defs>
    </svg>
  )
}

type SplashProps = {
  className?: string
  x: number
  y: number
  scale?: number
  rotate?: number
  color: 'blue' | 'orange'
  withDrip?: boolean
  withDots?: boolean
}

export function InkSplash({ className, x, y, scale = 1, rotate = 0, color, withDrip = true, withDots = true }: SplashProps) {
  const transform = `translate(${x} ${y}) rotate(${rotate}) scale(${scale})`
  return (
    <g className={`ink-splash ink-splash--${color}${className ? ` ${className}` : ''}`} transform={transform}>
      <use href="#ink-cluster" />
      {withDrip && <use href="#ink-drip" x="55" y="30" />}
      {withDots && <use href="#ink-dots" x="-70" y="40" />}
      {withDots && <use href="#ink-dots" x="70" y="-55" transform="rotate(140)" />}
    </g>
  )
}

type CornerSplashProps = {
  position: string
  color: 'blue' | 'orange'
  size?: number
}

export function CornerSplash({ position, color, size = 220 }: CornerSplashProps) {
  return (
    <svg
      className={`corner-splash corner-splash--${position}`}
      width={size}
      height={size}
      viewBox="-100 -100 200 200"
      aria-hidden="true"
    >
      <InkSplash x={0} y={0} color={color} />
    </svg>
  )
}

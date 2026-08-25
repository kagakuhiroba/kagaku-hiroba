export function InkSplatterDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <g id="ink-core-a">
          <circle cx="0" cy="0" r="34" />
          <circle cx="4" cy="4" r="26" />
          <circle cx="30" cy="-10" r="22" />
          <circle cx="-26" cy="14" r="20" />
          <circle cx="10" cy="30" r="17" />
          <circle cx="-16" cy="-28" r="15" />
        </g>
        <g id="ink-core-b">
          <circle cx="0" cy="0" r="30" />
          <circle cx="34" cy="6" r="24" />
          <circle cx="-30" cy="-4" r="22" />
          <circle cx="12" cy="-24" r="14" />
          <circle cx="-10" cy="22" r="13" />
        </g>
        <g id="ink-core-c">
          <circle cx="0" cy="0" r="32" />
          <circle cx="8" cy="28" r="22" />
          <circle cx="-10" cy="-26" r="20" />
          <circle cx="-22" cy="10" r="14" />
          <circle cx="20" cy="-8" r="13" />
        </g>
        <circle id="ink-satellite" cx="46" cy="0" r="15" />
        <g id="ink-fling">
          <circle cx="70" cy="0" r="6" />
          <circle cx="92" cy="-8" r="4.2" />
          <circle cx="112" cy="-20" r="3" />
          <circle cx="128" cy="-36" r="1.8" />
        </g>
        <g id="ink-dots">
          <circle cx="0" cy="0" r="3.8" />
          <circle cx="19" cy="11" r="2.5" />
          <circle cx="-13" cy="23" r="1.9" />
          <circle cx="32" cy="-16" r="3.1" />
          <circle cx="-29" cy="-8" r="2.3" />
          <circle cx="11" cy="-27" r="1.6" />
          <circle cx="46" cy="7" r="1.9" />
          <circle cx="-7" cy="36" r="1.7" />
          <circle cx="-38" cy="14" r="1.4" />
          <circle cx="24" cy="30" r="1.5" />
        </g>
      </defs>
    </svg>
  )
}

type InkVariant = 'a' | 'b' | 'c'

const SATELLITE_CONFIG: Record<InkVariant, { angle: number; scale: number }[]> = {
  a: [
    { angle: 20, scale: 1.0 },
    { angle: 75, scale: 0.6 },
    { angle: 140, scale: 0.85 },
    { angle: 195, scale: 0.5 },
    { angle: 250, scale: 1.1 },
    { angle: 310, scale: 0.7 },
  ],
  b: [
    { angle: -15, scale: 1.15 },
    { angle: 45, scale: 0.55 },
    { angle: 100, scale: 0.9 },
    { angle: 165, scale: 0.65 },
    { angle: 230, scale: 1.0 },
  ],
  c: [
    { angle: 10, scale: 0.8 },
    { angle: 65, scale: 1.1 },
    { angle: 120, scale: 0.5 },
    { angle: 175, scale: 0.95 },
    { angle: 230, scale: 0.6 },
    { angle: 285, scale: 0.85 },
    { angle: 335, scale: 0.65 },
  ],
}

const FLING_ANGLE: Record<InkVariant, number> = { a: 100, b: -60, c: 200 }

type SplashProps = {
  className?: string
  x: number
  y: number
  scale?: number
  rotate?: number
  variant?: InkVariant
  color: 'blue' | 'orange'
  withDrip?: boolean
  withDots?: boolean
}

export function InkSplash({
  className,
  x,
  y,
  scale = 1,
  rotate = 0,
  variant = 'a',
  color,
  withDrip = true,
  withDots = true,
}: SplashProps) {
  const transform = `translate(${x} ${y}) rotate(${rotate}) scale(${scale})`
  return (
    <g className={`ink-splash ink-splash--${color}${className ? ` ${className}` : ''}`} transform={transform}>
      <use href={`#ink-core-${variant}`} />
      {SATELLITE_CONFIG[variant].map((satellite, i) => (
        <use key={i} href="#ink-satellite" transform={`rotate(${satellite.angle}) scale(${satellite.scale})`} />
      ))}
      {withDrip && <use href="#ink-fling" transform={`rotate(${FLING_ANGLE[variant]})`} />}
      {withDots && <use href="#ink-dots" x="-88" y="52" />}
      {withDots && <use href="#ink-dots" x="86" y="-68" transform="rotate(140)" />}
    </g>
  )
}

type CornerSplashProps = {
  position: string
  color: 'blue' | 'orange'
  size?: number
  variant?: InkVariant
  rotate?: number
}

export function CornerSplash({ position, color, size = 220, variant = 'a', rotate = 0 }: CornerSplashProps) {
  return (
    <svg
      className={`corner-splash corner-splash--${position}`}
      width={size}
      height={size}
      viewBox="-145 -145 290 290"
      aria-hidden="true"
    >
      <InkSplash x={0} y={0} color={color} variant={variant} rotate={rotate} />
    </svg>
  )
}

export function InkSplatterDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <g id="ink-cluster-a">
          <circle cx="0" cy="0" r="38" />
          <circle cx="44" cy="-15" r="29" />
          <circle cx="-38" cy="18" r="26" />
          <circle cx="15" cy="43" r="24" />
          <circle cx="-20" cy="-40" r="21" />
          <circle cx="56" cy="27" r="18" />
          <circle cx="-53" cy="-10" r="17" />
          <circle cx="27" cy="-51" r="15" />
          <circle cx="2" cy="61" r="14" />
          <circle cx="63" cy="-33" r="12" />
          <circle cx="-58" cy="40" r="12" />
          <circle cx="7" cy="7" r="32" />
          <circle cx="-66" cy="6" r="10" />
          <circle cx="34" cy="63" r="10" />
          <circle cx="70" cy="6" r="9" />
        </g>
        <g id="ink-cluster-b">
          <circle cx="0" cy="0" r="34" />
          <circle cx="55" cy="8" r="30" />
          <circle cx="-50" cy="-5" r="27" />
          <circle cx="85" cy="-12" r="19" />
          <circle cx="-82" cy="14" r="17" />
          <circle cx="20" cy="38" r="21" />
          <circle cx="-25" cy="-34" r="19" />
          <circle cx="62" cy="-32" r="15" />
          <circle cx="-62" cy="32" r="14" />
          <circle cx="103" cy="10" r="11" />
          <circle cx="-102" cy="-9" r="10" />
          <circle cx="32" cy="-48" r="12" />
          <circle cx="-38" cy="48" r="11" />
        </g>
        <g id="ink-cluster-c">
          <circle cx="0" cy="0" r="36" />
          <circle cx="10" cy="52" r="28" />
          <circle cx="-12" cy="-50" r="26" />
          <circle cx="18" cy="98" r="19" />
          <circle cx="-20" cy="-93" r="17" />
          <circle cx="-8" cy="20" r="23" />
          <circle cx="30" cy="-22" r="18" />
          <circle cx="-30" cy="16" r="16" />
          <circle cx="5" cy="132" r="11" />
          <circle cx="-5" cy="-128" r="10" />
          <circle cx="36" cy="62" r="13" />
          <circle cx="-36" cy="-58" r="12" />
        </g>
        <g id="ink-drip">
          <circle cx="0" cy="0" r="9" />
          <circle cx="20" cy="18" r="5.5" />
          <circle cx="33" cy="34" r="3.4" />
          <ellipse cx="45" cy="47" rx="2.4" ry="3.6" />
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
      <use href={`#ink-cluster-${variant}`} />
      {withDrip && <use href="#ink-drip" x="68" y="38" />}
      {withDots && <use href="#ink-dots" x="-88" y="52" />}
      {withDots && <use href="#ink-dots" x="86" y="-68" transform="rotate(140)" />}
      {withDots && <use href="#ink-dots" x="-20" y="-92" transform="rotate(60)" />}
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

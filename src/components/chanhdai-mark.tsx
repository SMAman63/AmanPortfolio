// This mark is used for the header and profile cover.
export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="180"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        SMA
      </text>
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="180" font-weight="bold" fill="${color}" font-family="sans-serif">SMA</text></svg>`
}

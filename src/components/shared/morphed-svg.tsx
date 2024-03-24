import { CSSProperties, SVGProps } from "react";

const MorphedSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 800 800'
    {...props}
  >
    <defs>
      <filter
        id='a'
        width='300%'
        height='300%'
        x='-100%'
        y='-100%'
        colorInterpolationFilters='sRGB'
        filterUnits='objectBoundingBox'
        primitiveUnits='userSpaceOnUse'
      >
        <feGaussianBlur
          width='100%'
          height='100%'
          x='0%'
          y='0%'
          in='SourceGraphic'
          result='blur'
          stdDeviation={112}
        />
      </filter>
    </defs>
    <g filter='url(#a)'>
      <ellipse
        cx={282.153}
        cy={310.805}
        fill='hsla(306, 100%, 50%, 0.56)'
        rx={119.5}
        ry={115}
        style={
          {
            "--darkreader-inline-fill": "#00a7b6",
          } as CSSProperties
        }
      />
      <ellipse
        cx={535.735}
        cy={407.899}
        fill='hsla(194, 100%, 50%, 0.56)'
        rx={119.5}
        ry={115}
      />
      <ellipse
        cx={305.05}
        cy={550.645}
        fill='hsla(267, 100%, 50%, 0.55)'
        rx={119.5}
        ry={115}
      />
    </g>
  </svg>
);
export default MorphedSVG;

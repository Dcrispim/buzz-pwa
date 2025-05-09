import * as React from "react"
import { SVGProps } from "react"
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponent = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#64748B"
      d="m13.979 3.378 5.317 3.07 2.696-1.552-8.014-4.63L.594 8.001l2.683 1.552 10.703-6.175ZM24.677 6.448 13.98 12.624 8.663 9.553l-2.69 1.552 8.008 4.623 13.392-7.727-2.696-1.553ZM2.746 16.838l-2.69-1.552v9.246l13.386 7.734v-3.104L2.746 22.979v-6.14ZM.057 12.181l10.696 6.175v6.141l2.69 1.56v-9.253L.056 9.076v3.105ZM22.532 15.286V12.18l-8.013 4.623v15.462l2.69-1.552V18.356l5.323-3.07ZM25.214 10.629v12.35l-5.317 3.078v3.104l8.014-4.63V9.077l-2.697 1.553Z"
    />
  </svg>
)
export { SvgComponent as LogoFour }

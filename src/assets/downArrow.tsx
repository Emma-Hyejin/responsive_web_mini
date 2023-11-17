import { SVG } from "@/types/svg";

const DownArrow = ({ fillColor, width, height }: SVG) => {
	return (
		<svg
			fill={fillColor}
			width={width}
			height={height}
			version="1.0"
			viewBox="-96 0 512 280"
		>
			<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
		</svg>
	);
};

export default DownArrow;

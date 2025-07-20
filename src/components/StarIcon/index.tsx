/*
  Simple Start SVG Component thats receive a favorite prop to change the color of the icon
*/

interface StarIconProps {
  favorite?: boolean;
  size?: number;
  className?: string;
}

export const StarIcon = ({ favorite = false, size = 24 }: StarIconProps) => {
  const colorFavoriteClass = favorite
    ? "fill-favorite stroke-favorite"
    : "fill-none stroke-non_favorite";

  return (
    <svg
      data-testid="star-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={"currentColor"}
      stroke={"currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={colorFavoriteClass}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

import type { IconName } from "../../data/linkArray";

interface LinkIconProps {
  icon: IconName;
}

const iconLabels: Record<IconName, string> = {
  linkedin: "in",
  stackoverflow: "SO",
  github: "GH",
  x: "X",
  facebook: "f",
  shop: "$",
  ebay: "eb",
  email: "@",
};

function LinkIcon({ icon }: LinkIconProps) {
  const label = iconLabels[icon];

  return (
    <svg
      className="link-icon"
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="link-icon-background" width="32" height="32" rx="7" />
      {icon === "email" ? (
        <>
          <path
            className="link-icon-line"
            d="M8 11h16v10H8z"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="link-icon-line"
            d="m8 12 8 6 8-6"
            vectorEffect="non-scaling-stroke"
          />
        </>
      ) : (
        <text
          className="link-icon-mark"
          x="16"
          y="20"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {label}
        </text>
      )}
    </svg>
  );
}

export default LinkIcon;

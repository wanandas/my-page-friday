import { BadgeCustom } from "./ฺBadge.styled";

type mainColor =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

const Badge = ({
  value,
  color,
  useMainColor,
}: {
  value: string;
  color?: string;
  useMainColor?: mainColor;
}) => {
  return (
    <BadgeCustom
      color={useMainColor}
      style={{ background: color }}
      label={value}
    />
  );
};

export default Badge;

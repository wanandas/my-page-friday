import { useTheme } from "@mui/material";
import { BadgeCustom } from "./Badge.styled"; // Patched: Corrected import path

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
  color, // Custom background color string
  useMainColor, // Theme color key
}: {
  value: string;
  color?: string;
  useMainColor?: mainColor;
}) => {
  const theme = useTheme();

  if (useMainColor) {
    // Prioritize useMainColor: uses theme's Chip styling for primary, secondary, etc.
    return <BadgeCustom color={useMainColor} label={value} />;
  }

  if (color) {
    // Use custom color string with contrast text
    const contrastText = theme.palette.getContrastText(color);
    return (
      <BadgeCustom
        style={{ backgroundColor: color, color: contrastText }}
        label={value}
      />
    );
  }

  // Default: no specific color prop, relies on Chip's default or BadgeCustom's base styles
  return <BadgeCustom label={value} />;
};

export default Badge;

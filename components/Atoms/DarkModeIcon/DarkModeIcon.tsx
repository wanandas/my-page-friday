import {
  CSSProperties,
  FunctionComponent,
  HTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useSpring, animated } from "react-spring";

export const defaultProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "23%",
    },
    svg: {
      transform: "rotate(40deg)",
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(180deg)",
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

let REACT_TOGGLE_DARK_MODE_GLOBAL_ID = 0;

type SVGProps = Omit<HTMLAttributes<HTMLOrSVGElement>, "onChange">;

export interface Props extends SVGProps {
  onChange: (checked: boolean) => void;
  checked: boolean;
  style?: CSSProperties;
  size?: number | string;
  animationProperties?: typeof defaultProperties;
  moonColor?: string;
  sunColor?: string;
}

const DarkModeIcon: FunctionComponent<Props> = ({
  onChange,
  children,
  checked = false,
  size = 24,
  animationProperties = defaultProperties,
  moonColor = "white",
  sunColor = "#fff",
  style,
  ...rest
}) => {
  const [id, setId] = useState(0);

  useEffect(() => {
    REACT_TOGGLE_DARK_MODE_GLOBAL_ID += 1;
    setId(REACT_TOGGLE_DARK_MODE_GLOBAL_ID);
  }, [setId]);

  const properties = useMemo(() => {
    if (animationProperties !== defaultProperties) {
      return Object.assign(defaultProperties, animationProperties);
    }

    return animationProperties;
  }, [animationProperties]);

  const { circle, svg, lines, mask } = properties[checked ? "dark" : "light"];

  const svgContainerProps = useSpring({
    ...svg,
    config: animationProperties.springConfig,
  });
  const centerCircleProps = useSpring({
    ...circle,
    config: animationProperties.springConfig,
  });
  const maskedCircleProps = useSpring({
    ...mask,
    config: animationProperties.springConfig,
  });
  const linesProps = useSpring({
    ...lines,
    config: animationProperties.springConfig,
  });

  const [{ color }, set] = useSpring(
    () => ({
      color: checked ? moonColor : sunColor,
    }),
    [checked]
  );

  const toggle = () => onChange(!checked);

  const uniqueMaskId = `circle-mask-${id}`;

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      onMouseEnter={() => {
        set.start({
          color: "rgb(250, 72, 72)",
        });
      }}
      onMouseLeave={() => {
        set.start({ color: checked ? moonColor : sunColor });
      }}
      viewBox="0 0 24 24"
      color={color}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      onClick={toggle}
      style={{
        cursor: "pointer",
        ...svgContainerProps,
        ...style,
      }}
      {...rest}
    >
      <mask id={uniqueMaskId}>
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle
          // @ts-ignore
          style={maskedCircleProps}
          r="9"
          fill="black"
        />
      </mask>

      <animated.circle
        cx="12"
        cy="12"
        fill={color}
        // @ts-ignore
        style={{ ...centerCircleProps }}
        mask={`url(#${uniqueMaskId})`}
      />
      <animated.g stroke="currentColor" style={linesProps}>
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  );
};

export default DarkModeIcon;

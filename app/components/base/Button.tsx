import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  root: {
    fontSize: 24,
  },
});

const vars = [
  [16, 14],
  [20, 16],
  [24, 18],
];

const styleObjects = vars.map((tuple) => ({
  root: {
    background: 'green',
    borderRadius: 8,
    paddingHorizontal: tuple[0],
    fontSize: tuple[1],
    paddingVertical: 8,
  },
  start: {
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
    paddingStart: tuple[0] * 0.75,
  },
  end: {
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
    paddingEnd: tuple[0] * 0.75,
  },
}));

const smallStyles = stylex.create({ ...styleObjects[0] });
const mediumStyles = stylex.create({ ...styleObjects[1] });
const largeStyles = stylex.create({ ...styleObjects[2] });

const styleGroups = {
  small: smallStyles,
  medium: mediumStyles,
  large: largeStyles,
};

export default function Button({
  size,
  cap,
  children,
}: {
  size: "small" | "medium" | "large";
  cap?: "start" | "end";
  children: React.ReactNode;
}) {
  const styles = styleGroups[size];
  const capStyles = cap && styles[cap];
  return <button {...stylex.props(styles.root, capStyles)}>{children}</button>;
}

import * as stylex from "@stylexjs/stylex";
import Button from "./base/Button";

const DARK = "@media (prefers-color-scheme: dark)";

export default function InputChat() {
  return (
    <div {...stylex.props(styles.row)}>
      <input {...stylex.props(styles.input)} type="text" placeholder="Message" name="message"></input>
      <Button size={"small"}>Sent</Button>
    </div>
  );
}

const styles = stylex.create({
  base: {
    fontFamily: "system-ui, sans-serif",
    color: {
      default: "black",
      [DARK]: "white",
    },
  },
  row: {
    display: "flex",
  },
  input: {
    border: 'none',
    flexGrow: 1,
    background: '#17212b',
    outline: "none",
  },
  focused: {
    fontFamily: "system-ui, sans-serif",
    color: "#4dabf7",
  },
});

import * as stylex from "@stylexjs/stylex";

import Button from "./components/base/Button";
import InputChat from "./components/InputChat";

const MEDIA_MOBILE = "@media (max-width: 700px)";

export default async function Home() {
  return (
    <>
      <h1 {...stylex.props(s.h1)}>Chat App</h1>

      <p {...stylex.props(s.body, s.p)}>để a sắp xếp</p>

      <p {...stylex.props(s.body, s.p)}>
        You can create new JS files and to test your own code.
      </p>
      <InputChat></InputChat>
    </>
  );
}

const s = stylex.create({
  h1: {
    fontSize: "2rem",
    lineHeight: 1,
    fontWeight: 400,
    textAlign: "center",
    display: "flex",
    gap: 8,
    whiteSpace: "nowrap",
    flexDirection: {
      default: "row",
      [MEDIA_MOBILE]: "column",
    },
  },
  body: {
    fontSize: "1rem",
  },
  p: {
    marginTop: 16,
    lineHeight: 1.4,
  },
  li: {
    marginTop: 8,
  },
  link: {
    color: "#4dabf7",
  },
});

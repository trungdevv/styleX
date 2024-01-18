import * as stylex from "@stylexjs/stylex";

import Button from "./components/base/Button";

const MEDIA_MOBILE = "@media (max-width: 700px)";

export default async function Home() {
  return (
    <>
      <h1 {...stylex.props(s.h1)}>Chat App</h1>

      <p {...stylex.props(s.body, s.p)}>
        Use the links below to see the generated output of the various
        Javascript files or you can see the generated CSS bundle with the link
        above. (The links may be slow to open at first)
      </p>

      <p {...stylex.props(s.body, s.p)}>
        You can create new JS files and to test your own code.
      </p>
      <input type="text" placeholder="Sent message"></input>
      <Button size={"small"}>Sent</Button>
    </>
  );
}

const s = stylex.create({
  h1: {
    fontSize: "2rem",
    lineHeight: 1,
    fontFamily: "system-ui, sans-serif",
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
    fontFamily: "system-ui, sans-serif",
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
  emoji: {
    position: "relative",
    fontFamily: "sans-serif",
    top: {
      default: 0,
      [MEDIA_MOBILE]: 2,
    },
  },
});

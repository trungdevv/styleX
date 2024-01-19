import "./globals.css";
import "./globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "./globalTokens.stylex";
export const metadata = {
  title: "StyleX + Next",
  description: "StyleX with NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html {...stylex.props(s.html, s.reset)} lang="en">
      <body {...stylex.props(s.reset, s.body)}>
        <nav {...stylex.props(styles.nav)}>
          <span {...stylex.props(styles.spacer)} />
        </nav>
        <main {...stylex.props(styles.main)}>{children}</main>
      </body>
    </html>
  );
}

const MEDIA_MOBILE = "@media (max-width: 700px)";

const s = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    background: colors.background,
    fontFamily: fonts.appFont,
  },
});

const styles = stylex.create({
  nav: {
    display: "flex",
    width: "100%",
    maxWidth: 1240,
    marginInline: "auto",
    gap: 4,
    padding: 32,
  },
  spacer: {
    flexGrow: 1,
  },
  main: {
    paddingInline: 32,
    minHeight: "100vh",
    width: "100%",
    maxWidth: 1240,
    marginInline: "auto",
  },
});

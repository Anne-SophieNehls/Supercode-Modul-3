import { useThemeContext } from "./themeContextProvider";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌚" : "🌞"}</button>
  );
}

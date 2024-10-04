import Header from "./Header";
import { useContext } from "react";
import { ThemeContext } from "./themeContextProvider";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme theme--${theme}`}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;

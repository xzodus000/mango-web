// components/Layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <h1>contact</h1>
    </div>
  );
};

export default Layout;

import { useEffect, useState } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ReportPage from "@/pages/ReportPage";
import NotFound from "@/pages/not-found";

function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggle = () => setIsDark((d) => !d);
  return { isDark, toggle };
}

function Router({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  return (
    <Switch>
      <Route path="/" component={() => <ReportPage isDark={isDark} toggleTheme={toggleTheme} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router isDark={isDark} toggleTheme={toggle} />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;

/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
	useCallback,
	ReactNode,
	JSX,
} from "react";

export type Theme = "light" | "dark";

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = (): ThemeContextValue => {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
};

export const ThemeProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const [theme, setThemeState] = useState<Theme>(() => {
		const saved = localStorage.getItem("theme") as Theme | null;
		if (saved === "dark" || saved === "light") return saved;
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});

	const applyTheme = useCallback((t: Theme) => {
		const html = document.documentElement;
		if (t === "dark") {
			html.classList.add("dark");
			html.classList.remove("light");
		} else {
			html.classList.add("light");
			html.classList.remove("dark");
		}
		localStorage.setItem("theme", t);
	}, []);

	useLayoutEffect(() => {
		applyTheme(theme);
	}, [theme, applyTheme]);

	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = (e: MediaQueryListEvent): void => {
			if (!localStorage.getItem("theme")) {
				setThemeState(e.matches ? "dark" : "light");
			}
		};
		media.addEventListener("change", handler);
		return () => media.removeEventListener("change", handler);
	}, []);

	const toggleTheme = (): void =>
		setThemeState((prev) => (prev === "light" ? "dark" : "light"));
	const setTheme = (t: Theme): void => setThemeState(t);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

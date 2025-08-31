"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function ThemeModeButton() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const enableTransitions = () =>
        "startViewTransition" in document &&
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

    async function toggleDark({ clientX: x, clientY: y }: MouseEvent) {
        const isDark = theme === "dark";

        if (!enableTransitions()) {
            setTheme(theme === "light" ? "dark" : "light");
            return;
        }

        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y),
            )}px at ${x}px ${y}px)`,
        ];

        await document.startViewTransition(async () => {
            setTheme(theme === "light" ? "dark" : "light");
        }).ready;

        document.documentElement.animate(
            { clipPath: !isDark ? clipPath.reverse() : clipPath },
            {
                duration: 700,
                easing: "ease-in",
                pseudoElement: `::view-transition-${!isDark ? "old" : "new"}(root)`,
            },
        );
    }

    function showIcon() {
        if (theme == "dark") {
            return <Sun size={35} className="text-yellow-500" />;
        } else {
            return <Moon size={35} className="text-blue-500" />;
        }
    }

    return (
        <button onClick={(event) => toggleDark(event as unknown as MouseEvent)}>
            {showIcon()}
        </button>
    );
}

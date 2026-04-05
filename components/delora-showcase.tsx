"use client";

import dynamic from "next/dynamic";
import type { TradeWidgetProps } from "@deloraprotocol/widget";
import { useState } from "react";

import styles from "./delora-showcase.module.css";

type ThemeMode = "light" | "dark";

const TradeWidget = dynamic<TradeWidgetProps>(
  () => import("@deloraprotocol/widget").then((mod) => mod.TradeWidget),
  {
    ssr: false,
    loading: () => (
      <div className={styles.widgetFallback}>
        Loading Delora widget...
      </div>
    ),
  },
);

const themeOptions: Array<{ label: string; value: ThemeMode }> = [
  { label: "White", value: "light" },
  { label: "Black", value: "dark" },
];

export function DeloraShowcase() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const logoSrc = theme === "dark" ? "/logo-light.svg" : "/logo-dark.svg";

  return (
    <div className={styles.shell} data-theme={theme}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.brand}>
            <img
              src={logoSrc}
              alt="Delora"
              width={613}
              height={184}
              className={styles.logo}
            />
          </div>

          <div className={styles.themeSwitch} aria-label="Theme switch">
            {themeOptions.map((option) => {
              const selected = theme === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  className={selected ? styles.themeButtonActive : styles.themeButton}
                  onClick={() => setTheme(option.value)}
                  aria-pressed={selected}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.widgetFrame}>
          <TradeWidget
            theme={theme}
            config={{
              apiUrl: "https://api.delora.build",
            }}
          />
        </div>
      </main>
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ko" | "en";

const LangCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "ko", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nexys-lang");
      if (saved === "en" || saved === "ko") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("nexys-lang", l);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}

// t("한국어", "English") — 현재 언어에 맞는 값 반환 (ReactNode 지원: <br/> 등)
export function useT() {
  const { lang } = useLang();
  return useCallback(
    <K, E>(ko: K, en: E): K | E => (lang === "en" ? en : ko),
    [lang]
  );
}

// 배열/데이터용
export function pick<T>(lang: Lang, ko: T, en: T): T {
  return lang === "en" ? en : ko;
}

"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { useLang } from "@/lib/i18n";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const en = lang === "en";
  const t = (ko: string, e: string) => (en ? e : ko);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `[${t("홈페이지 문의", "Website inquiry")}] ${
      get("type") || t("프로젝트 문의", "Project inquiry")
    } — ${get("name")}`;
    const body = [
      `${t("이름", "Name")}: ${get("name")}`,
      `${t("회사/기관", "Company")}: ${get("company")}`,
      `${t("이메일", "Email")}: ${get("email")}`,
      `${t("연락처", "Phone")}: ${get("phone")}`,
      `${t("문의 유형", "Inquiry type")}: ${get("type")}`,
      "",
      `${t("문의 내용", "Message")}:`,
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">
          {t("이름", "Name")} <span className="req">*</span>
        </label>
        <input id="name" name="name" type="text" placeholder={t("홍길동", "Your name")} required />
      </div>
      <div className="field">
        <label htmlFor="company">{t("회사 / 기관", "Company / Org.")}</label>
        <input id="company" name="company" type="text" placeholder={t("(주)넥시스", "Company")} />
      </div>
      <div className="field">
        <label htmlFor="email">
          {t("이메일", "Email")} <span className="req">*</span>
        </label>
        <input id="email" name="email" type="email" placeholder="name@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="phone">{t("연락처", "Phone")}</label>
        <input id="phone" name="phone" type="tel" placeholder="010-0000-0000" />
      </div>
      <div className="field full">
        <label htmlFor="type">
          {t("문의 유형", "Inquiry type")} <span className="req">*</span>
        </label>
        <select id="type" name="type" required defaultValue="">
          <option value="" disabled>
            {t("선택해 주세요", "Please select")}
          </option>
          <option>{t("HILS · SIL 시스템", "HILS · SIL system")}</option>
          <option>{t("시험 자동화 (Test Automation)", "Test Automation")}</option>
          <option>{t("제어계측 / 전계장 엔지니어링", "Control & E&I engineering")}</option>
          <option>{t("국방 · 항공 점검장비", "Defense · aerospace test equipment")}</option>
          <option>{t("기타 문의", "Other")}</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">
          {t("문의 내용", "Message")} <span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={t(
            "시험 대상, 요구 사양, 일정 등 프로젝트 개요를 자유롭게 적어 주세요.",
            "Tell us about the unit under test, required specs, schedule and any project context."
          )}
          required
        ></textarea>
      </div>
      {sent ? (
        <div className="form-ok">
          <b className="accent">{t("문의가 접수되었습니다.", "Your inquiry is ready.")}</b>
          <p>
            {t(
              "메일 작성 창이 열립니다. 전송이 어려우시면 ",
              "Your email app will open. If it doesn't, please write to "
            )}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            {t(
              " 로 직접 보내주세요. 담당자가 영업일 기준 1–2일 내에 회신드리겠습니다.",
              " directly. We will reply within 1–2 business days."
            )}
          </p>
        </div>
      ) : null}
      <div className="form__foot">
        <p className="form__note">
          {t(
            "제출하신 정보는 문의 응대 목적으로만 사용되며, 제3자에게 제공되지 않습니다.",
            "Your information is used only to respond to your inquiry and is never shared with third parties."
          )}
        </p>
        <button className="btn btn--lg" type="submit">
          {t("문의 보내기", "Send inquiry")} <span className="arr">→</span>
        </button>
      </div>
    </form>
  );
}

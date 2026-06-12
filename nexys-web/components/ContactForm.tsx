"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `[홈페이지 문의] ${get("type") || "프로젝트 문의"} — ${get("name")}`;
    const body = [
      `이름: ${get("name")}`,
      `회사/기관: ${get("company")}`,
      `이메일: ${get("email")}`,
      `연락처: ${get("phone")}`,
      `문의 유형: ${get("type")}`,
      "",
      "문의 내용:",
      get("message"),
    ].join("\n");

    // 백엔드 없음 — mailto 로 메일 클라이언트 연결 (PRD 3.5)
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">
          이름 <span className="req">*</span>
        </label>
        <input id="name" name="name" type="text" placeholder="홍길동" required />
      </div>
      <div className="field">
        <label htmlFor="company">회사 / 기관</label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="(주)넥시스"
        />
      </div>
      <div className="field">
        <label htmlFor="email">
          이메일 <span className="req">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@company.com"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="phone">연락처</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="010-0000-0000"
        />
      </div>
      <div className="field full">
        <label htmlFor="type">
          문의 유형 <span className="req">*</span>
        </label>
        <select id="type" name="type" required defaultValue="">
          <option value="" disabled>
            선택해 주세요
          </option>
          <option>HILS · SIL 시스템</option>
          <option>시험 자동화 (Test Automation)</option>
          <option>제어계측 / 전계장 엔지니어링</option>
          <option>국방 · 항공 점검장비</option>
          <option>기타 문의</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">
          문의 내용 <span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="시험 대상, 요구 사양, 일정 등 프로젝트 개요를 자유롭게 적어 주세요."
          required
        ></textarea>
      </div>
      {sent ? (
        <div className="form-ok">
          <b className="accent">문의가 접수되었습니다.</b>
          <p>
            메일 작성 창이 열립니다. 전송이 어려우시면{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> 로 직접 보내주세요.
            담당자가 영업일 기준 1–2일 내에 회신드리겠습니다.
          </p>
        </div>
      ) : null}
      <div className="form__foot">
        <p className="form__note">
          제출하신 정보는 문의 응대 목적으로만 사용되며, 제3자에게 제공되지
          않습니다.
        </p>
        <button className="btn btn--lg" type="submit">
          문의 보내기 <span className="arr">→</span>
        </button>
      </div>
    </form>
  );
}

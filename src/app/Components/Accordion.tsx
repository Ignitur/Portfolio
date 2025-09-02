'use client';

import { useEffect, useId, useRef, useState } from "react";

type FAQItemProps = {
  question: string | React.ReactNode;
  answer: string | React.ReactNode | (string | React.ReactNode)[];
  defaultOpen?: boolean;
  className?: string;
};

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
  className = "",
}: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId(); // для aria-связки

  // Плавная анимация высоты
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (open) {
      el.style.maxHeight = el.scrollHeight + "px";
      // после окончания — auto, чтобы внутри можно было менять контент
      const t = setTimeout(() => (el.style.maxHeight = "none"), 300);
      return () => clearTimeout(t);
    } else {
      // чтобы анимация закрытия сработала из auto → ставим текущую высоту
      const current = el.scrollHeight;
      el.style.maxHeight = current + "px";
      // рефлоу
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      el.style.maxHeight = "0px";
    }
  }, [open]);

  return (
    <div className={`border-b py-3  ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center  justify-between text-left font-medium
                   text-gray-900 dark:text-gray-100 hover:opacity-90 active:bg-amber-200/20"
        aria-expanded={open}
        aria-controls={`panel-${id}`}
      >
        <span className="pr-4">{question}</span>
        <svg
          className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.146l3.71-2.916a.75.75 0 11.92 1.18l-4.2 3.3a.75.75 0 01-.92 0l-4.2-3.3a.75.75 0 01-.08-1.2z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        id={`panel-${id}`}
        ref={panelRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out "
        style={{ maxHeight: defaultOpen ? "none" : "0px" }}
      >
        <div className="pt-2 text-gray-600 dark:text-gray-300 ">
          {Array.isArray(answer) ? (
						answer.map((line, i) => (
							<p key={i} className="leading-relaxed pl-2 text-xl">
							• {line}
							</p>
						))
					) : (
						<p>{answer}</p>
					)}
        </div>
      </div>
    </div>
  );
}

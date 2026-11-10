import type { ElementType, ReactNode } from "react";

/** True for draft copy ("TK …"), which renders as a marked placeholder. */
export const isDraft = (s?: string) => !!s && /^TK\b/.test(s.trim());

/**
 * Renders case study copy. Draft strings get a visible "to come" treatment
 * so nothing unwritten can pass for finished text.
 */
export function Copy({ text, as: Tag = "p", className = "" }: { text?: string; as?: ElementType; className?: string }): ReactNode {
  if (!text) return null;
  if (isDraft(text)) {
    return (
      <Tag className={className}>
        <span className="tk">{text.replace(/^TK\s*[—-]?\s*/, "") || "To be written"}</span>
      </Tag>
    );
  }
  // Blank lines start new paragraphs (paragraph tags only).
  if (Tag === "p" && text.includes("\n\n")) {
    return (
      <div className={`flex flex-col gap-[0.85em] ${className}`}>
        {text.split(/\n\n+/).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    );
  }
  return <Tag className={className}>{text}</Tag>;
}

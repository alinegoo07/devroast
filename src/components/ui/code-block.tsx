import { codeToHtml } from "shiki";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({
  code,
  language = "javascript",
  filename,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "vesper",
  });

  return (
    <div className="rounded-md border border-border bg-input overflow-hidden">
      {filename && (
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border bg-background">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-xs text-tertiary font-mono">{filename}</span>
        </div>
      )}
      <div
        className="font-mono text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

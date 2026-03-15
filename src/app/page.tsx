"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleSwitch } from "@/components/ui/toggle-switch";

export default function HomePage() {
  const [roastMode, setRoastMode] = useState(true);
  const [code, setCode] = useState("");

  return (
    <main className="min-h-[calc(100vh-3.5rem)] bg-background flex flex-col items-center px-10 pt-20">
      <div className="w-full max-w-[780px] flex flex-col gap-8">
        {/* Hero Title */}
        <div className="flex flex-col gap-3">
          <h1 className="font-mono text-4xl font-bold flex items-center gap-3">
            <span className="text-primary">&gt;</span>
            <span className="text-foreground">
              paste your code. get roasted.
            </span>
          </h1>
          <p className="font-mono text-sm text-muted-foreground">
            {
              "// drop your code below and we'll rate it — brutally honest or full roast mode"
            }
          </p>
        </div>

        {/* Code Input */}
        <div className="border border-border rounded-md bg-input overflow-hidden">
          {/* Window Header */}
          <div className="h-10 px-4 border-b border-border flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-amber-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          {/* Code Area */}
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// paste your code here..."
            className="w-full h-[320px] p-4 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none"
          />
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between">
          <ToggleSwitch checked={roastMode} onChange={setRoastMode}>
            <span className="text-xs text-muted-foreground">
              {"// maximum sarcasm enabled"}
            </span>
          </ToggleSwitch>

          <Button>$ roast_my_code</Button>
        </div>

        {/* Footer Stats */}
        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground font-mono">
          <span>2,847 codes roasted</span>
          <span>·</span>
          <span>avg score: 4.2/10</span>
        </div>

        {/* Spacer */}
        <div className="h-15" />

        {/* Leaderboard Preview */}
        <div className="w-full max-w-[960px] flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-sm text-muted-foreground">
              {"// the worst code on the internet, ranked by shame"}
            </h2>
            <Link
              href="/leaderboard"
              className="text-sm text-muted-foreground hover:text-foreground font-mono transition-colors"
            >
              view all &gt;&gt;
            </Link>
          </div>

          {/* Leaderboard Table */}
          <div className="border border-border rounded-md overflow-hidden">
            {/* Header */}
            <div className="h-10 px-5 border-b border-border flex items-center bg-bg-surface">
              <span className="w-10 text-muted-foreground font-mono text-xs">
                #
              </span>
              <span className="w-16 text-muted-foreground font-mono text-xs">
                score
              </span>
              <span className="flex-1 text-muted-foreground font-mono text-xs">
                code preview
              </span>
              <span className="w-24 text-muted-foreground font-mono text-xs">
                language
              </span>
            </div>

            {/* Rows */}
            {[
              {
                rank: 1,
                score: 1.2,
                code: "function calculateTotal(items) { var total = 0;",
                lang: "javascript",
              },
              {
                rank: 2,
                score: 2.1,
                code: "const result = arr.map(x => x * 2).filter(x => x > 10)",
                lang: "javascript",
              },
              {
                rank: 3,
                score: 2.8,
                code: "if (condition) { return true } else { return false }",
                lang: "javascript",
              },
            ].map((item) => (
              <div
                key={item.rank}
                className="h-14 px-5 border-b border-border flex items-center last:border-0"
              >
                <span className="w-10 text-muted-foreground font-mono text-xs">
                  #{item.rank}
                </span>
                <span className="w-16 text-accent-red font-mono text-sm font-bold">
                  {item.score}
                </span>
                <span className="flex-1 text-muted-foreground font-mono text-xs truncate">
                  {item.code}
                </span>
                <span className="w-24 text-muted-foreground font-mono text-xs">
                  {item.lang}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Hint */}
          <p className="text-center text-xs text-muted-foreground font-mono py-4">
            showing top 3 of 2,847 &middot;{" "}
            <Link
              href="/leaderboard"
              className="hover:text-foreground transition-colors"
            >
              view full leaderboard &gt;&gt;
            </Link>
          </p>
        </div>

        {/* Bottom Spacer */}
        <div className="h-15" />
      </div>
    </main>
  );
}

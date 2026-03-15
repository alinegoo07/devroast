import Link from "next/link";

export function Navbar() {
  return (
    <header className="h-14 border-b border-border bg-background flex items-center justify-between px-10">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-primary font-mono text-xl font-bold">&gt;</span>
        <span className="text-foreground font-mono text-lg font-medium">
          devroast
        </span>
      </Link>
      <Link
        href="/leaderboard"
        className="text-muted-foreground font-mono text-sm hover:text-foreground transition-colors"
      >
        leaderboard
      </Link>
    </header>
  );
}

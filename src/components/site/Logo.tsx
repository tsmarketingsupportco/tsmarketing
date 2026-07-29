export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="https://46ykd16d8k.ufs.sh/f/GTSgDGA07Fis7Nzh0Vi9Lm8sAawMkrK5bYyBnfclOhpCiZTS"
        alt="TS Marketing Logo"
        className="h-8 w-8 rounded-lg object-contain shadow-[0_0_12px_rgba(168,85,247,0.4)]"
      />
      <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
        TS<span className="text-muted-foreground font-normal"> Marketing</span>
      </span>
    </div>
  );
}


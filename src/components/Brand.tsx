import Link from "next/link";
import { ShieldCheck, Sprout } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="FarmSec home">
      <span className="brandMark">
        <ShieldCheck size={compact ? 18 : 22} strokeWidth={2.2} />
        <Sprout className="brandLeaf" size={compact ? 9 : 11} strokeWidth={2.4} />
      </span>
      <span className="brandText">Farm<span>Sec</span></span>
    </Link>
  );
}

import Home from "@/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Test VWO SC30 Sync 3",
  description: "Test page with VWO SmartCode 3.0 Sync (via vwo-smartcode-nextjs).",
};

export default function TestSc30Sync3Page() {
  return <Home />;
}

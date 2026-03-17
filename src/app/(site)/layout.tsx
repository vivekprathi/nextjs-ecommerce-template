"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { VWOScript } from "vwo-smartcode-nextjs";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

/** Route → VWO account ID for SmartCode 3.0 SYNC. Replace with real account IDs when ready. */
const VWO_SYNC_ACCOUNT_IDS: Record<string, string> = {
  "/test-sc30-sync1": "1209681",
  "/test-sc30-sync2": "0000002",
  "/test-sc30-sync3": "0000003",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const vwoAccountId = pathname ? VWO_SYNC_ACCOUNT_IDS[pathname] : undefined;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {vwoAccountId && (
          <VWOScript
            accountId={vwoAccountId}
            type="SYNC"
          />
        )}
      </head>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <Header />
                    {children}

                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

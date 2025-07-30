import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "FlowScriptor - Générateur de Scripts de Cold Calling",
  description: "Créez des scripts de cold calling personnalisés avec l'IA. Générez instantanément des scripts optimisés pour maximiser vos conversions.",
  keywords: ["cold calling", "scripts", "vente", "IA", "générateur", "sales"],
  authors: [{ name: "FlowScriptor" }],
  creator: "FlowScriptor",
  publisher: "FlowScriptor",
  robots: "index, follow",
  openGraph: {
    title: "FlowScriptor - Générateur de Scripts de Cold Calling",
    description: "Créez des scripts de cold calling personnalisés avec l'IA",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowScriptor - Générateur de Scripts de Cold Calling",
    description: "Créez des scripts de cold calling personnalisés avec l'IA",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/png" sizes="64x64" href="/faviconFinal.png" />
        <link rel="shortcut icon" href="/faviconFinal.png" />
        <link rel="apple-touch-icon" href="/faviconFinal.png" />
      </head>
      <body
        className="bg-slate-950 font-sans antialiased"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

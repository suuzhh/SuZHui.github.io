import { Inter } from "next/font/google";
import { cx } from "@/utils";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cx(
          inter.className,
          "antialiased text-gray-800 dark:bg-black dark:text-gray-400"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

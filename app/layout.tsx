import Image from "next/image";
import "./globals.css";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import PFLogo from "@/public/printforge-logo.svg";
import Link from "next/link";

const albertSans = Albert_Sans({
    subsets: ["latin"],
    display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-montserrat-alternates",
});

/**
 * Challenge:
 * Update the header code so our users can more easily navigate between routes.
 * For now, send the "3d Models" link to a non-existant "/3d-models" route,
 * we'll work on creating that page soon.
 *
 * For the logo images, you can surround the entire `div` containing the images
 * with the Link component.
 */

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${albertSans.className} ${montserratAlternates.variable}`}
            >
                <header className="w-full bg-white">
                    <nav className="flex justify-between px-6 py-4">
                        <Link href="/">
                            <div className="relative">
                                {/* Desktop logo */}
                                <Image
                                    src={PFLogo}
                                    alt="PrintForge Logo"
                                    width={200}
                                    className="w-[200px] h-auto hidden md:block"
                                />
                                {/* Mobile logo */}
                                <Image
                                    src={PFLogoIcon}
                                    alt="PrintForge Logo"
                                    width={400}
                                    className="w-[40px] h-auto block md:hidden"
                                />
                            </div>
                        </Link>
                        <ul className="flex items-center gap-2.5">
                            <Link href={"/3d-models"}>
                                <p>3D Models</p>
                            </Link>
                            <Link href="/about">
                                <p>About</p>
                            </Link>
                        </ul>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}

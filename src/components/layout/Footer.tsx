import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Care & Services",
    links: [
      { label: "Pregnancy & Antenatal Care", href: "/pregnancy-antenatal-care" },
      { label: "Natural Birth", href: "/natural-birth" },
      { label: "Birth Preparation", href: "/birth-preparation" },
      { label: "Fertility & Preconception", href: "/fertility-preconception" },
      { label: "VBAC & Birth Options", href: "/vbac" },
      { label: "Gynaecology & Wellness", href: "/gynaecology" },
      { label: "Vaginismus & Intimate Care", href: "/vaginismus" },
      { label: "Postpartum Care", href: "/postpartum-care" },
      { label: "Lactation", href: "/lactation" },
      { label: "Nutrition & Well-being", href: "/nutrition-emotional-wellbeing" },
      { label: "Pediatrics & Newborn", href: "/newborn-pediatric-care" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Care Team", href: "/doctors" },
      { label: "Services Hub", href: "/services" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

export function Footer({ minimalNav = false }: { minimalNav?: boolean }) {
  return (
    <footer className="flex min-h-[350px] flex-col justify-between bg-footer py-16 text-white">
      <Container>
        <div className="flex flex-col gap-12 xl:flex-row xl:justify-between">
          <div className="max-w-sm">
            <div className="inline-block" aria-label="The Birth Wave">
              <div className="relative h-[76px] sm:h-[84px] w-64 sm:w-72 overflow-hidden flex items-center justify-center rounded-2xl bg-rose">
                <Image
                  src="/images/logo.PNG"
                  alt="The Birth Wave"
                  width={900}
                  height={900}
                  className="absolute left-1/2 top-[50%] w-[360px] sm:w-[410px] -translate-x-1/2 -translate-y-1/2 object-contain brightness-0 invert"
                  priority
                />
              </div>
            </div>
            <p className="mt-5 sm:mt-6 text-[14.5px] sm:text-[15px] leading-relaxed text-footer-secondary">
              Women&rsquo;s health, pregnancy, birth, postpartum and newborn care,
              connected in one patient journey.
            </p>
          </div>

          <div className={`grid gap-10 xl:gap-14 ${minimalNav ? "grid-cols-1" : "grid-cols-2 sm:grid-cols-3"}`}>
            {!minimalNav && columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="text-xs font-semibold tracking-[0.14em] text-blush uppercase">
                  {col.heading}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] sm:text-[14.5px] text-footer-secondary transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <nav aria-label="Contact Info">
              <p className="text-xs font-semibold tracking-[0.14em] text-blush uppercase">
                Contact Info
              </p>
              <ul className="mt-4 flex flex-col gap-3.5">
                <li>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-[14.5px] sm:text-[15px] text-footer-secondary transition-colors hover:text-white"
                  >
                    <svg
                      className="h-[18px] w-[18px] shrink-0 text-white/90"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span className="font-medium">{site.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.cugPhoneHref}
                    className="flex items-center gap-3 text-[14.5px] sm:text-[15px] text-footer-secondary transition-colors hover:text-white"
                  >
                    <svg
                      className="h-[18px] w-[18px] shrink-0 text-white/90"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span className="font-medium">{site.cugPhone} <span className="text-[12px] opacity-75">(CUG)</span></span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-[14.5px] sm:text-[15px] text-footer-secondary transition-colors hover:text-white"
                  >
                    <svg
                      className="h-[18px] w-[18px] shrink-0 text-white/90"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span className="font-medium break-words sm:break-normal">{site.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-[14.5px] sm:text-[15px] text-footer-secondary transition-colors hover:text-white"
                  >
                    <svg
                      className="mt-1 h-[18px] w-[18px] shrink-0 text-white/90"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="leading-relaxed">
                      {site.address.full}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-12 border-t border-footer-divider pt-6 text-[12px] sm:text-[13px] text-footer-legal">
          &copy; Birthwave. All rights reserved. Privacy Policy &bull; Terms &amp;
          Conditions &bull; Medical Disclaimer
        </div>
      </Container>
    </footer>
  );
}

import { site } from "@/content/site";
import { TextLink } from "./TextLink";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="frame mt-[clamp(5.5rem,11vw,10rem)] pb-8">
      <div className="grid-12 gap-y-10 border-t border-charcoal pt-10 md:pt-14">
        <p className="col-span-4 max-w-[16ch] text-title font-semibold md:col-span-7">{site.footerLine}</p>

        <div className="col-span-4 flex min-w-0 flex-col gap-6 text-body md:col-span-6 md:col-start-7 md:self-end lg:col-span-4 lg:col-start-9">
          <div>
            <p className="label mb-2 text-graphite">Email</p>
            <TextLink href={`mailto:${site.email}`} className="select-all text-lede">
              {site.email}
            </TextLink>
          </div>
          <div className="flex gap-8 text-meta">
            <TextLink href={site.linkedin} external>LinkedIn</TextLink>
            <TextLink href={site.instagram} external>Instagram</TextLink>
            <TextLink href={site.resume} external>Resume</TextLink>
          </div>
        </div>

        <p className="col-span-4 mt-6 text-meta text-graphite md:col-span-12 md:mt-16">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}

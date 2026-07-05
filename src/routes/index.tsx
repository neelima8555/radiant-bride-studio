import { createFileRoute } from "@tanstack/react-router";
import BridalHome from "@/components/BridalHome";
import heroBride from "@/assets/hero-bride.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: heroBride },
      { name: "twitter:image", content: heroBride },
    ],
    links: [{ rel: "canonical", href: "https://radiant-bridal-canvas.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Lekshana Makeovers",
          description: "Luxury bridal makeup studio specializing in HD, airbrush and traditional bridal makeup, hairstyling and saree draping.",
          url: "https://radiant-bridal-canvas.lovable.app/",
          telephone: "+918555010607",
          image: heroBride,
          areaServed: "India",
          serviceType: "Bridal Makeup",
        }),
      },
    ],
  }),
  component: BridalHome,
});

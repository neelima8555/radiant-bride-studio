import { createFileRoute } from "@tanstack/react-router";
import BridalHome from "@/components/BridalHome";
import heroBride from "@/assets/hero-bride.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: heroBride },
      { name: "twitter:image", content: heroBride },
    ],
  }),
  component: BridalHome,
});

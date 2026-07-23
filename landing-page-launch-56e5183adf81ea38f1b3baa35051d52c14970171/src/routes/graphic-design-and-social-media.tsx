import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/graphic-design-and-social-media")({
  component: () => <CategoryPage category="Graphic Design and Social Media" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/motion-graphics-and-commercials")({
  component: () => <CategoryPage category="Motion Graphics and Commercials" />,
});

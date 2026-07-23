import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/3d-and-composite")({
  component: () => <CategoryPage category="3D and Composite" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";

export const Route = createFileRoute("/ai-videos-and-ugcs")({
  component: () => <CategoryPage category="AI Videos and UGCs" />,
});

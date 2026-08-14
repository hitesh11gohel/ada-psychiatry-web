const formatTitle = (slug: string) =>
  slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default async function CommonPage(props: PageProps<"/[...slug]">) {
  const { slug } = await props.params;
  const title = formatTitle(slug[slug.length - 1] ?? "");

  return (
    <section className="bg-bg flex min-h-screen items-center justify-center">
      <h2 className="font-abhaya text-5xl font-bold">{title}</h2>
    </section>
  );
}

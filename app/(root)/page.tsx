import SearchForm from "@/app/components/SearchForm";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Testing with Next.js 15</h1>

        <p className="sub-heading !max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex aut eaque sunt nesciunt atque aliquam natus sit qui. Asperiores quia molestias dolores modi deserunt iste laudantium adipisci cum exercitationem.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}

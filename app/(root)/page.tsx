import SearchForm from "@/components/SearchForm";
import PostCard   from "@/components/PostCard";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: 'John Doe'},
    _id: 1,
    description: 'This is a description.',
    image: 'https://placehold.co/350x600',
    category: "Robots",
    title: "We Robots",
  }];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Testing with Next.js 15</h1>

        <p className="sub-heading !max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex aut eaque sunt nesciunt atque aliquam natus sit qui. Asperiores quia molestias dolores modi deserunt iste laudantium adipisci cum exercitationem.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Items'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: PostCardType, index: number)=>(
              <PostCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">
              No Post found
            </p>
          )}
        </ul>
      </section>
    </>
  );
}

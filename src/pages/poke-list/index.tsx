import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import usePokeList from "@/hooks/usePokeList";
import Card from "@/components/poke-card";
import Loader from "@/components/common/loader";

const PokeListPage = () => {
  const { ref, inView } = useInView();
  const {
    status,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePokeList();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status === "loading") {
    return (
      <div data-testid="loader" className="w-full relative h-full">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div
        data-testid="poke-list-card"
        className="grid gap-6 grid-rows-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        {data?.pages.map((page) =>
          page.results.map(({ name, url }) => (
            <Card key={url} title={name} imageURL={url} />
          ))
        )}
      </div>
      <div className="relative py-4">
        {isFetchingNextPage ? (
          <Loader />
        ) : (
          <button
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {hasNextPage ? "Load Newer" : "Nothing more to load"}
          </button>
        )}
      </div>
      <div>
        {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
      </div>
      <hr />
    </>
  );
};

export default PokeListPage;

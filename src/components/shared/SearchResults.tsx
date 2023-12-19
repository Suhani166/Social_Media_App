import { SearchResultProps } from "@/_root/pages/Explore";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

const SearchResults = ({
	isSearchFetching,
	searchedPosts,
}: SearchResultProps) => {
	if (isSearchFetching) return <Loader />;
	if (searchedPosts && searchedPosts.documents.length > 0) {
		return <GridPostList posts={searchedPosts.documents} />;
	}
	return (
		<p className="text-light-4 w-full text-center mt-10">
			No results found
		</p>
	);
};

export default SearchResults;

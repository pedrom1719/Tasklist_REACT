export interface SearchTagProps {
  content: string;
}

function SearchTag({ content }: SearchTagProps) {
  return (
    <>
      <span className="mt-1 rounded-full bg-gray-100 px-3 pb-[7px] pt-1 text-xs text-gray-600">
        {content}
      </span>
    </>
  );
}

export default SearchTag;

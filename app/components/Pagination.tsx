import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Arrow from "@cmp/Arrow";

interface IPagination {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
}

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: IPagination) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const prevStyle =
    "flex items-center justify-center px-3 h-8 ml-0 leading-tight border rounded-l-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white";
  const nextStyle =
    "flex items-center justify-center px-3 h-8 leading-tight border rounded-r-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white";
  const pageStyle =
    "flex items-center justify-center px-3 h-8 leading-tight border border-gray-700 hover:bg-amber-500 hover:text-white transition-all";

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="w-full  flex items-center justify-between border-t border-gray-500">
          <div className="flex items-center pt-3 text-slate-200 hover:text-amber-500 cursor-pointer">
            <Arrow toLeft={true} />
            <button
              onClick={handlePrev}
              className="text-lg ml-3 font-bold leading-none"
            >
              Previous
            </button>
          </div>
          <div className="text-white text-lg">
            <span>{currentPage}</span> of <span>{totalPages}</span>
          </div>
          <div className="flex items-center pt-3 text-slate-200 hover:text-amber-500 cursor-pointer">
            <button
              onClick={handleNext}
              className="text-lg font-bold leading-none mr-3"
            >
              Next
            </button>
            <Arrow toLeft={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;

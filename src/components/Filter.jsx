export default function Filter({ activeFilterValue, updateCurrentFilter }) {
  return (
    <div className="flex gap-2 mt-4 ">
      <button
        className={`px-3 py-1 rounded border ${
          activeFilterValue === "all" && "bg-blue-600 text-white"
        }`}
        onClick={() => updateCurrentFilter("all")}
      >
        All
      </button>
      <button
        className={`px-3 py-1 rounded border ${
          activeFilterValue === "active" && "bg-blue-600 text-white"
        }`}
        onClick={() => updateCurrentFilter("active")}
      >
        Active
      </button>
      <button
        className={`px-3 py-1 rounded border ${
          activeFilterValue === "completed" && "bg-blue-600 text-white"
        }`}
        onClick={() => updateCurrentFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

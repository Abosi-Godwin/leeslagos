export default function Button({ text, type, loading, btn = "primary" }) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center font-extrabold
      rounded-md p-2 uppercase w-full hover:bg-primary-normal ${
        btn === "secondary" ? "bg-gray-200 text-neutral-900" : "bg-primary-dark text-white"
      }`}
      disabled={loading}
    >
      {loading ? "loading" : text}
    </button>
  );
}

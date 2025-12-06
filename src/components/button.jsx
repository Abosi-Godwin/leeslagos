export default function Button({ text, type, loading }) {
  return (
    <button
      type={type}
      className="bg-primary-dark text-white flex items-center justify-center font-extrabold rounded-md p-2 uppercase w-full hover:bg-light-secondaryAccent"
      disabled={loading}
    >
      {loading ? "loading" : text}
    </button>
  );
}

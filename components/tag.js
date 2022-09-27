export default function Tag({ children }) {
  return (
    <span className="bg-gray-200/50 backdrop-blur-sm  py-2 px-6 rounded-lg text-gray- text-xs">
      {children}
    </span>
  );
}

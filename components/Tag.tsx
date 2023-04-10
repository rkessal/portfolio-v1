type Props = {
  children: string;
};

export default function Tag({ children }: Props) {
  return (
    <span className="bg-gray-100 backdrop-blur-sm  py-2 px-6 rounded-2xl text-xs shrink-0 ">
      {children}
    </span>
  );
}

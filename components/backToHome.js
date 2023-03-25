import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
export default function BackToHome() {
  return (
    <Link href="/" scroll={false}>
      <div className="flex flex-row pt-8 items-center space-x-3 mb-8 hover:cursor-pointer w-fit">
        <FaChevronLeft color="#630000" />
        <span className="text-redMain-500 font-medium">Retour</span>
      </div>
    </Link>
  );
}

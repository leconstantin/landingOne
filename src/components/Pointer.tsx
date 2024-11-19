import { FiMousePointer } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

export default function Pointer(props: {
  name: string;
  color?: "red" | "blue";
}) {
  const { name, color } = props;
  return (
    <div className="relative">
      <FiMousePointer className="h-4 text-white cursor-pointer size-5" />
      <div className="absolute top-4 left-4">
        <div
          className={twMerge(
            "inline-flex rounded-full font-bold text-sm bg-blue-400 px-2 rounded-tl-none",
            color === "red" && "bg-red-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

import Watch from "@/features/More/watch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "More ",
};
export default function Page() {
  return (
    <>
      <Watch />
    </>
  );
}

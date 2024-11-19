import Button from "@/components/Button";
import { LuMenu } from "react-icons/lu";
const navlinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integration", href: "#integration" },
  { label: "FAQs", href: "#faqs" },
];
export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
          <div>
            <h1 className="font-bold text-2xl h-9 w-auto cursor-pointer">
              Layers
            </h1>
          </div>
          <div className="hidden lg:flex justify-center">
            <nav className="flex gap-6 font-medium">
              {navlinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-end gap-4">
            <LuMenu className="h-7 w-7 md:hidden cursor-pointer" />

            <Button
              variant="secondary"
              className="hidden md:inline-flex items-center"
            >
              Log In
            </Button>
            <Button
              variant="primary"
              className="hidden md:inline-flex items-center"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

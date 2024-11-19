import Tag from "@/components/Tag";

const text = `you're racing to create exceptional work, but traditionaldesign tools slow you down with unnecessary complexity and step learning curves.`;

export default function Introduction() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>

        <div className="text-4xl md:text-6xl text-center font-medium mt-10">
          <span>Your creative process deserves better.</span>{" "}
          <span className="text-white/15">{text}</span>
          <span className="text-lime-400 block">
            That&apos; why we built Layers
          </span>
        </div>
      </div>
    </section>
  );
}

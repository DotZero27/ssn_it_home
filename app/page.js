import Image from "next/image";
import SSN_IT from "@/assets/SSN_IT.svg";
import { PROJECTS } from "@/config";

export const metadata = {
  title: "SSN IT Home",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-10 xs:p-24">
      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={SSN_IT}
          alt="Next.js Logo"
          width={340}
          height={120}
          priority
        />
      </div>

      <div className="mb-32 grid gap-4 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 text-left">
        {PROJECTS.map(({ title, description, url }, index) => (
          <a
            key={index}
            href={url}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

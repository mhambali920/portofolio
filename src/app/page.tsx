import ThemeDrawer from "@/components/ThemeDrawer";

export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center gap-16 bg-stone-100 p-8 pb-20 font-[family-name:var(--font-geist-sans)] dark:bg-stone-900 sm:p-20">
      {/* create modern sidebar */}
      <div className="flex flex-col items-center justify-center py-20 text-gray-800 dark:text-gray-100">
        <h1 className="text-center text-5xl font-bold">
          Next Themes + Tailwind +{" "}
          <span className="rounded bg-primary px-4 py-2 text-primary-foreground">
            Multi
          </span>{" "}
          Themes
        </h1>
        <p className="text-2xl italic">with app-dir</p>
        <p>
          Hi there! I’m a passionate Fullstack Developer who loves building
          modern web applications. Whether it's crafting a seamless user
          experience or optimizing backend performance, I enjoy every bit of the
          process.
        </p>
        <ThemeDrawer />
      </div>
    </div>
  );
}

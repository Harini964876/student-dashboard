import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import HeroTile from "./components/HeroTile";
import CourseGrid from "./components/CourseGrid";
import ActivityTile from "./components/ActivityTile";

import { createSupabaseServer } from "./lib/supabase";

export default async function Page() {
  const supabase = await createSupabaseServer();

  const { data: courses, error } =
    await supabase
      .from("courses")
      .select("*");

  if (error) {
    throw new Error(
      "Failed to fetch courses"
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-6 pb-24 md:pb-6">
        <div
          className="
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          "
        >
          <div className="xl:col-span-2">
            <HeroTile />
          </div>

          <CourseGrid
            courses={courses || []}
          />

          <div className="xl:col-span-2">
            <ActivityTile />
          </div>
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
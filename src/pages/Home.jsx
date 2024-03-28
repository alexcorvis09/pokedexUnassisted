import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <nav className="p-4 flex justify-evenly items-center border-2 border-zinc-100">
        <div>
          <Link to="/">
            <img
              src="https://static-00.iconduck.com/assets.00/pokemon-icon-256x256-ohm14hkf.png"
              alt="pokeball"
              className="size-12"
            />
            Home
          </Link>
        </div>
        <Link to="/all">See All</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}

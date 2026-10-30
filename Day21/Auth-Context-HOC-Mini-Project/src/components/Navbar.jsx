import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="border-b border-forest/10 bg-white/75 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-black tracking-tight text-cocoa">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-butter text-forest">A</span>
          AuthFlow
        </a>

        {user ? (
          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-semibold text-forest sm:inline">
              Welcome {user.name}
            </span>
            <button onClick={logout} className="rounded-full bg-cocoa px-5 py-2.5 text-sm font-bold text-white transition hover:bg-forest focus:outline-none focus:ring-4 focus:ring-leaf/50">
              Logout
            </button>
          </div>
        ) : (
          <span className="rounded-full bg-butter/40 px-4 py-2 text-xs font-bold text-cocoa">
            Guest mode
          </span>
        )}
      </nav>
    </header>
  );
}
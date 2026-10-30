import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <article className="rounded-3xl border border-forest/10 bg-forest p-6 text-white shadow-soft sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Step 02</p>
          <h2 className="mt-1 text-2xl font-black">Dashboard</h2>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-xl">⌂</span>
      </div>
      <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
        <p className="text-sm text-white/65">Protected content</p>
        <h3 className="mt-2 text-2xl font-black">Welcome {user.name}</h3>
        <p className="mt-2 text-white/80">Role: <span className="font-bold text-butter">{user.role}</span></p>
        <p className="mt-5 text-sm leading-6 text-white/65">
          You can see this dashboard because the withAuth Higher-Order Component
          checked that a user is logged in.
        </p>
      </div>
    </article>
  );
}
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { user, login } = useContext(AuthContext);

  return (
    <article className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest/60">Step 01</p>
          <h2 className="mt-1 text-2xl font-black text-cocoa">Login</h2>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-butter/60 text-xl">↗</span>
      </div>
      <p className="mb-6 leading-7 text-cocoa/75">
        Click the button to simulate a successful login. The user details are stored
        in <code className="rounded bg-leaf/25 px-1.5 py-0.5 text-sm">AuthContext</code>.
      </p>

      {user ? (
        <div className="rounded-2xl bg-leaf/25 p-4 text-sm font-semibold text-forest">
          You are logged in as {user.name}.
        </div>
      ) : (
        <button onClick={login} className="w-full rounded-2xl bg-butter px-6 py-4 font-black text-cocoa shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F0BB2E] focus:outline-none focus:ring-4 focus:ring-butter/40">
          Login as Bala
        </button>
      )}
      <p className="mt-4 text-xs text-cocoa/55">Demo credentials are not required for this mini project.</p>
    </article>
  );
}
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { withAuth } from "./hoc/withAuth";

const ProtectedDashboard = withAuth(Dashboard);

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-forest">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 lg:py-14">
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-forest/15 bg-leaf/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-forest">
              React mini project
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-cocoa sm:text-5xl lg:text-6xl">
              A simple, secure-minded <span className="text-forest">login flow.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-cocoa/80 sm:text-lg">
              Learn how React Context shares user information, how a Higher-Order
              Component protects a page, and how Tailwind CSS builds a responsive UI.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full bg-butter/50 px-4 py-2">Context API</span>
              <span className="rounded-full bg-leaf/50 px-4 py-2">useContext</span>
              <span className="rounded-full bg-[#E8D5C3] px-4 py-2">HOC</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-leaf/40 p-6 shadow-soft sm:p-8">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-butter/70 blur-2xl" />
            <div className="relative rounded-3xl border border-white/70 bg-white/75 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-cocoa">AUTH STATUS</span>
                <span className="rounded-full bg-leaf/50 px-3 py-1 text-xs font-bold text-forest">DEMO</span>
              </div>
              <div className="my-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-butter text-2xl">✦</div>
                <div>
                  <p className="font-bold text-cocoa">Your learning dashboard</p>
                  <p className="text-sm text-cocoa/65">Login to see the protected content</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full rounded-full bg-leaf/40" />
                <div className="h-3 w-4/5 rounded-full bg-butter/60" />
                <div className="h-3 w-2/3 rounded-full bg-[#E8D5C3]" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Login />
          <ProtectedDashboard />
        </section>
        <footer className="border-t border-forest/15 pt-5 text-center text-xs text-cocoa/60">
          Built with React + JavaScript + Tailwind CSS · Learning project
        </footer>
      </main>
    </div>
  );
}
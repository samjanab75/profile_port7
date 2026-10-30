import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// A Higher-Order Component (HOC) receives a component and returns a new component.
export function withAuth(WrappedComponent) {
  function ProtectedComponent(props) {
    const { user } = useContext(AuthContext);

    if (!user) {
      return (
        <article className="rounded-3xl border border-forest/10 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-forest/60">Step 02</p>
              <h2 className="mt-1 text-2xl font-black text-cocoa">Dashboard</h2>
            </div>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-butter/60 text-xl">⌂</span>
          </div>
          <div className="rounded-2xl border border-dashed border-cocoa/25 bg-cream p-6 text-center">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-butter/60 text-2xl">🔒</span>
            <h3 className="mt-4 text-xl font-black text-cocoa">Please Login</h3>
            <p className="mt-2 text-sm leading-6 text-cocoa/70">
              This page is protected. Click “Login as Bala” to access the dashboard.
            </p>
          </div>
        </article>
      );
    }

    return <WrappedComponent {...props} />;
  }

  ProtectedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return ProtectedComponent;
}
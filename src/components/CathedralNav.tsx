import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const primaryLinks = [
  { label: "Method", to: "/method" },
  { label: "Journal", to: "/journal" },
  { label: "Pricing", to: "/pricing" },
];

const courseLinks = [
  { label: "Writing", to: "/courses/writing" },
  { label: "Directing", to: "/courses/directing" },
  { label: "Producing", to: "/courses/producing" },
  { label: "All courses", to: "/courses" },
];

const facultyLinks = [
  { label: "Faculty", to: "/faculty" },
  { label: "Guest instructors", to: "/faculty/guests" },
  { label: "Apply to teach", to: "/faculty/apply" },
];

export function CathedralNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "courses" | "faculty">(null);
  const location = useLocation();
  const isAuthed = false; // wire to your auth context later

  return (
    <>
      {/* SKIP LINK — WCAG AA */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] cath-btn cath-btn--ember"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#1c1b1a]/85">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          {/* LOGO — replaces "Home" */}
          <Link to="/" aria-label="CUCO home" className="flex items-center gap-2">
            <span className="cath-card grid h-9 w-9 place-items-center font-mono text-sm font-semibold text-[#e5decc]">
              C
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-[#e5decc] sm:inline">
              CUCO
            </span>
          </Link>

          {/* DESKTOP CENTER */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Dropdown
              label="Courses"
              items={courseLinks}
              open={openMenu === "courses"}
              onOpen={() => setOpenMenu("courses")}
              onClose={() => setOpenMenu(null)}
              currentPath={location.pathname}
            />
            <Dropdown
              label="Faculty"
              items={facultyLinks}
              open={openMenu === "faculty"}
              onOpen={() => setOpenMenu("faculty")}
              onClose={() => setOpenMenu(null)}
              currentPath={location.pathname}
            />
            {primaryLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-3 py-2 text-sm transition",
                    isActive
                      ? "text-[#e5decc] underline decoration-[#c43503] decoration-2 underline-offset-8"
                      : "text-[#b9b2a4] hover:text-[#e5decc]",
                  ].join(" ")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT CLUSTER */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search (⌘K)"
              className="cath-icon-btn hidden sm:inline-flex"
            >
              <SearchIcon />
            </button>

            {isAuthed ? (
              <Link to="/dashboard" className="cath-btn cath-btn--ghost hidden sm:inline-flex">
                My courses
              </Link>
            ) : (
              <Link to="/signin" className="cath-btn cath-btn--ghost hidden sm:inline-flex">
                Sign in
              </Link>
            )}

            <Link to="/enroll" className="cath-btn cath-btn--ember hidden sm:inline-flex">
              Enroll
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="cath-icon-btn lg:hidden"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        {mobileOpen && (
          <div className="border-t border-[#062118]/40 bg-[#1c1b1a] px-4 pb-6 pt-2 lg:hidden">
            <MobileGroup title="Courses" items={courseLinks} />
            <MobileGroup title="Faculty" items={facultyLinks} />
            {primaryLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-[#e5decc] hover:bg-[#062118]"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to={isAuthed ? "/dashboard" : "/signin"}
                onClick={() => setMobileOpen(false)}
                className="cath-btn w-full"
              >
                {isAuthed ? "My courses" : "Sign in"}
              </Link>
              <Link
                to="/enroll"
                onClick={() => setMobileOpen(false)}
                className="cath-btn cath-btn--ember w-full"
              >
                Enroll
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

/* ---------- subcomponents ---------- */

function Dropdown({
  label,
  items,
  open,
  onOpen,
  onClose,
  currentPath,
}: {
  label: string;
  items: { label: string; to: string }[];
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  currentPath: string;
}) {
  const active = items.some((i) => currentPath.startsWith(i.to));
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        className={[
          "rounded-lg px-3 py-2 text-sm transition",
          active
            ? "text-[#e5decc] underline decoration-[#c43503] decoration-2 underline-offset-8"
            : "text-[#b9b2a4] hover:text-[#e5decc]",
        ].join(" ")}
      >
        {label} <span className="ml-1 text-xs opacity-70">▾</span>
      </button>
      {open && (
        <div className="cath-card absolute left-0 top-full mt-2 min-w-[220px] p-2">
          {items.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              onClick={onClose}
              className="block rounded-lg px-3 py-2 text-sm text-[#e5decc]/90 hover:bg-[#0b3225] hover:text-white"
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileGroup({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <details className="group">
      <summary className="cursor-pointer list-none rounded-lg px-3 py-3 text-base text-[#e5decc] hover:bg-[#062118]">
        {title}
        <span className="ml-1 text-xs opacity-70 group-open:hidden">▾</span>
      </summary>
      <div className="pl-4">
        {items.map((i) => (
          <NavLink
            key={i.to}
            to={i.to}
            className="block rounded-lg px-3 py-2 text-sm text-[#b9b2a4] hover:text-white"
          >
            {i.label}
          </NavLink>
        ))}
      </div>
    </details>
  );
}

/* ---------- icons (minimal inline — no border, per spec) ---------- */
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
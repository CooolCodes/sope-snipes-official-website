import { NavLink } from "react-router-dom";
import backgroundImage from "../assets/IMG_9325.jpg";

const Home = () => {
  const linkclassName = ({ isActive }) =>
    isActive
      ? "text-white text-sm md:text-lg font-light tracking-wide transition-all duration-300 hover:opacity-80 border border-white px-4 py-2"
      : "text-white text-sm md:text-lg font-light tracking-wide transition-all duration-300 hover:opacity-80 px-4 py-2";

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="min-h-screen bg-center bg-cover w-full flex flex-col items-center justify-center"
      id="home"
      //   className="bg-[url('/IMG_9325.jpg')] min-h-screen bg-center bg-cover w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-white text-5xl md:text-8xl lg:text-9xl font-serif tracking-wider mb-8 text-center drop-shadow-2xl">
        Sope Snipes
      </h1>
      <nav className="flex items-center justify-center gap-6 md:gap-8 mt-8">
        <a
          className="text-white text-sm md:text-lg font-light tracking-wide transition-all duration-300 hover:opacity-80 px-4 py-2 active:border active:border-white"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-white text-sm md:text-lg font-light tracking-wide transition-all duration-300 hover:opacity-80 px-4 py-2 active:border active:border-white"
          href="#portraits"
        >
          Portraits
        </a>
        <a
          className="text-white text-sm md:text-lg font-light tracking-wide transition-all duration-300 hover:opacity-80 px-4 py-2 active:border active:border-white"
          href="#qa"
        >
          Get to know Sope?
        </a>
      </nav>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
        <a
          href="https://open.spotify.com/user/31l7hezdqsdjffo5ivg3wptwh6ui?si=9b095b3dd08f45b7"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          aria-label="Spotify"
          target="blank"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"></path>
          </svg>
        </a>
        <a
          href="https://music.apple.com/ng/artist/sope-snipes/1817262052"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          aria-label="Apple Music"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.927 11.605c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12c6.628 0 12 5.373 12 12zm-6.278-3.953a.521.521 0 0 0-.64-.373l-6.047 1.65a.521.521 0 0 0-.373.5v6.834c-.437-.3-.986-.479-1.583-.479-1.347 0-2.438 1.025-2.438 2.29s1.091 2.29 2.438 2.29c1.347 0 2.438-1.025 2.438-2.29V13.2l5.224-1.425v3.398c-.437-.3-.986-.479-1.583-.479-1.347 0-2.438 1.025-2.438 2.29s1.091 2.29 2.438 2.29c1.347 0 2.438-1.025 2.438-2.29V8.175c0-.124-.044-.244-.125-.336a.521.521 0 0 0-.249-.187z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/sope_snipes/"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          aria-label="Instagram"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
          </svg>
        </a>
        <a
          href="https://x.com/sope_snipes"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          aria-label="X (Twitter)"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </a>
        <a
          href="https://www.tikhrefk.com/@sope_snipes?_t=ZM-8wp28IooufQ&amp;_r=1"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          aria-label="Tikhrefk"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
          </svg>
        </a>
        <a
          href="#"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          aria-label="YouTube"
        >
          <svg
            className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;

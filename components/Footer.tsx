export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm">
      <p>Copyright © 2026, All rights reserved.</p>

      <div className="flex justify-center gap-6 mt-2">
        <a
          href="#"
          className="hover:text-black dark:hover:text-white transition"
        >
          Terms of Service
        </a>

        <a
          href="#"
          className="hover:text-black dark:hover:text-white transition"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}

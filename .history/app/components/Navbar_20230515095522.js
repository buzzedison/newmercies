"use server";
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between">
          <div className="flex space-x-8">
            {/* Logo goes here */}
            <Link href="/">
              <a className="flex items-center space-x-2 text-gray-900 text-2xl font-semibold">
                <span className="material-icons-outlined">spa</span>
                <span>Retreat Center</span>
              </a>
            </Link>
          </div>
          <div className="flex space-x-8">
            {/* Navigation links */}
            {['gallery', 'events', 'about', 'facilities', 'contact'].map((page) => (
              <Link key={page} href={`/${page}`}>
                <a
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === `/${page}`
                      ? 'text-gray-900 bg-gray-200'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

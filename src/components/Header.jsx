import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black/30 backdrop-blur-md border-b border-pogo-orange/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-black bg-gradient-to-r from-pogo-orange to-pogo-yellow bg-clip-text text-transparent">
            EA POGO
          </Link>

          <ul className="hidden md:flex gap-8">
            <li>
              <Link
                to="/"
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  isActive('/')
                    ? 'text-pogo-yellow bg-pogo-yellow/10'
                    : 'text-gray-300 hover:text-pogo-yellow hover:bg-pogo-yellow/10'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/ai-recommendations"
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  isActive('/ai-recommendations')
                    ? 'text-pogo-yellow bg-pogo-yellow/10'
                    : 'text-gray-300 hover:text-pogo-yellow hover:bg-pogo-yellow/10'
                }`}
              >
                AI Recommendations
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  isActive('/dashboard')
                    ? 'text-pogo-yellow bg-pogo-yellow/10'
                    : 'text-gray-300 hover:text-pogo-yellow hover:bg-pogo-yellow/10'
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/strategy"
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all ${
                  isActive('/strategy')
                    ? 'text-pogo-yellow bg-pogo-yellow/10'
                    : 'text-gray-300 hover:text-pogo-yellow hover:bg-pogo-yellow/10'
                }`}
              >
                Strategy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

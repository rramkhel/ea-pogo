import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 text-gray-300 hover:text-pogo-yellow transition-colors mb-8"
    >
      <ArrowLeft size={20} />
      <span>Back to Home</span>
    </Link>
  );
}

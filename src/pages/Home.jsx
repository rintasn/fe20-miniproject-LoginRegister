import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#E8E8E8_0%,_#2E2E2E_100%)] relative overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 flex flex-col min-h-screen px-6 mx-auto max-w-7xl">
        {/* Center content */}
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          {/* Main heading */}
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            One-click for Being <span className="text-gray-400">Programmer</span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-2xl mb-12 text-lg text-gray-300">
            This is my first mini project using ReactJS, Vite, and Tailwind CSS.
          </p>

          {/* Action buttons */}
          <div className="flex gap-4">
            <Link to="/login" className="px-8 py-3 text-black transition-all bg-white rounded-full hover:bg-gray-200">
              Sign In →
            </Link>
            <Link to="/registeruser" className="px-8 py-3 transition-all border rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
              Sign Up →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

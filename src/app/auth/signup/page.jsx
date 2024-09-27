import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { Dumbbell } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-bold text-teal-400">SIGN UP</h2>
          <p className="text-teal-300 hover:text-teal-200 text-sm font-medium">
            Let’s get started. Are you ready for a simpler path to a healthier and 
            stronger you? Your journey starts here!
          </p>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative flex items-center">
              <Mail className="absolute left-3 text-teal-400" size={20} />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-full block w-full pl-10 py-2 border border-transparent bg-white-100 placeholder-teal-300 text-teal-900 focus:outline-none focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div className="relative flex items-center">
              <Lock className="absolute left-3 text-teal-400" size={20} />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-full block w-full pl-10 py-2 border border-transparent bg-white-100 placeholder-teal-300 text-teal-900 focus:outline-none focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
                placeholder="Password"
              />
            </div>

            <div className="relative flex items-center">
              <Lock className="absolute left-3 text-teal-400" size={20} />
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-full block w-full pl-10 py-2 border border-transparent bg-white-100 placeholder-teal-300 text-teal-900 focus:outline-none focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
                placeholder="Confirm"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-teal-400 border-gray-300 rounded focus:ring-teal-400"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-teal-300">
              I agree to the terms and conditions
            </label>
          </div>

          {/* Link wrapping the button */}
          <Link href='/auth/signup-details'>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-gray-500 bg-teal-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            >
              Sign Up
            </button>
          </Link>

          <div className="text-center mt-4">
            <Link href="/auth/signup" className="text-teal-300 hover:text-teal-200 text-sm font-medium">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}


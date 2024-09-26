'use client'
import Link from 'next/link';
import { Mail, Lock, Dumbbell } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (email === 'test@example.com' && password === 'fitease') {
      toast.success('Welcome back!',
      {icon:'🥳'});
      router.push('/');
     
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Dumbbell className="text-teal-400" size={80} />
          </div>
          <h2 className="mt-2 text-3xl font-bold text-teal-400">FitEase</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
          <div className="rounded-md shadow-sm space-y-4">
            <div className="relative flex items-center">
              <Mail className="absolute left-3 text-teal-400" size={20} />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-full block w-full pl-10 py-2 border border-transparent bg-white-100 placeholder-teal-300 text-teal-900 focus:outline-none focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-center mt-2">
            <a href="#" className="text-teal-300 hover:text-teal-200 text-sm font-medium">
              Forgotten your password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-gray-500 bg-teal-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            >
              <Link href="/auth/signup"></Link>
              Log In
            </button>
          </div>

          <div className="text-center mt-4">
            <Link href="/auth/signup" className="text-teal-300 hover:text-teal-200 text-sm font-medium">
              No account? Create one
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

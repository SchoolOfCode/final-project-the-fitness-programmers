'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ContactRound, CalendarDays, Ruler, Weight, SmartphoneCharging } from 'lucide-react';
import toast from 'react-hot-toast';

export default function UserDetailsPage() {
  const router = useRouter();

  // Simulate save settings function
  const saveSettings = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    toast.promise(
      saveSettings(), // Call the simulated save function
      {
        loading: 'Saving...',
        success: <b>Settings saved!</b>,
        error: <b>Could not save.</b>,
      }
    ).then(() => {
      // Navigate to the homepage after successful "save"
      router.push('/');
    });
  };

  return (
    <div className="min-h-screen bg-main px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 sm:p-10">
        <div className="text-center">
          <h2 className="pt-32 text-2xl sm:text-3xl font-extrabold text-primaryColour">
            We just need some more details...
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-8 justify-center">
            <div className="relative">
              <ContactRound className="absolute left-2 top-2 text-teal-400" />
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm"
                placeholder="Name"
              />
            </div>

            <div className="relative">
              <CalendarDays className="absolute left-2 top-2 text-teal-400" />
              <input
                id="age"
                name="age"
                type="number"
                required
                className="block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm"
                placeholder="Age"
              />
            </div>

            <div className="relative">
              <Weight className="absolute left-3 top-2.5 text-teal-400" size={20} />
              <input
                id="weight"
                name="weight"
                type="number"
                required
                className="block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm"
                placeholder="Weight (kg)"
              />
            </div>

            <div className="relative">
              <Ruler className="absolute left-2 top-2 text-teal-400" />
              <input
                id="height"
                name="height"
                type="number"
                required
                className="block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm"
                placeholder="Height (cm)"
              />
            </div>

            <div className="relative">
              <SmartphoneCharging className="absolute left-3 top-2.5 text-teal-400" size={20} />
              <select
                id="activity-level"
                name="activity-level"
                required
                className="block w-full px-3 py-2 pl-10 border placeholder-primaryColour text-primaryColour rounded-full focus:outline-none focus:ring-blue-500 focus:border-primaryColour-500 sm:text-sm"
              >
                <option value="">Activity level</option>
                <option value="low">Low</option>
                <option value="med">Med</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative w-full flex justify-center py-2 px-4 border border-transparent text-l font-medium rounded-full text-gray-500 bg-primaryColour font-extrabold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


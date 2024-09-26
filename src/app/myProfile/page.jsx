import { user } from '../data';
import Image from 'next/image';
import BottomNav from '../components/BottomNav';
import Nav from '../components/Nav';

export default function MyProfile() {
  return (
    <>
      <Nav />
      <div className='min-h-screen bg-main p-4 space-y-6 max-w-lg mx-auto font-sans'>
        <h1 className='text-3xl font-bold text-primaryColour text-center mb-4'>
          My Profile
        </h1>

        {/* Profile Section */}
        <div className='rounded-lg shadow-md p-6 space-y-6'>
          {/* Profile Image */}
          <div className='flex justify-center'>
            <Image
              className='w-32 h-32 rounded-full border-2'
              src={'/profile.jpg'}
              alt=''
              width={150}
              height={150}
            />
          </div>

          {/* Personal Details */}
          <h2 className='text-2xl font-semibold text-primaryColour text-center'>
            Profile
          </h2>
          <div className='grid grid-cols-2 gap-4'>
            <span className='font-medium text-primaryColour'>Name:</span>
            <span className='text-primaryColour'>{user[0].name}</span>

            <span className='font-medium text-primaryColour'>Email:</span>
            <span className='text-primaryColour'>{user[0].email}</span>

            <span className='font-medium text-primaryColour'>Height:</span>
            <span className='text-primaryColour'>{user[0].height}</span>

            <span className='font-medium text-primaryColour'>
              Current Weight:
            </span>
            <span className='text-primaryColour'>{user[0].currentWeight}</span>

            <span className='font-medium text-primaryColour'>Goal Weight:</span>
            <span className='text-primaryColour'>{user[0].targetWeight}</span>

            <span className='font-medium text-primaryColour'>Joined:</span>
            <span className='text-primaryColour'>Today</span>
          </div>

          {/* Bio Section */}
          <div className='space-y-2'>
            <h3 className='text-lg font-semibold text-primaryColour'>Bio</h3>
            <p className='text-primaryColour'>
              {user[0].bio ||
                `I'm fat and I want to be fit. I need to lose some weight.`}
            </p>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

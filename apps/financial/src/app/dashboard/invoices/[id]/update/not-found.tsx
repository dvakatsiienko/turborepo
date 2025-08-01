import { FaceFrownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main className='flex h-full flex-col items-center justify-center gap-2'>
      <FaceFrownIcon className='w-10 text-gray-400' />
      <h2 className='font-semibold text-xl'>404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
        href='/dashboard/invoices'>
        Go Back
      </Link>
    </main>
  );
};

export default NotFoundPage;

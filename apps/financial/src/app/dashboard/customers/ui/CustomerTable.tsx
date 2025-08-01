import { Suspense } from 'react';
import Image from 'next/image';

import { lusitana } from '@/theme/fonts';
import { SearchField } from '@/ui/SearchField';
import type { Customer } from '~/prisma/client/edge';

export const CustomerTable = (props: CustomerTableProps) => {
  const customerListHeadJSX = props.customerList?.map((customer) => (
    <div className='mb-2 w-full rounded-md bg-white p-4' key={customer.id}>
      <div className='flex items-center justify-between border-b pb-4'>
        <div>
          <div className='mb-2 flex items-center'>
            <div className='flex items-center gap-3'>
              <Image
                alt={`${customer.name}'s profile picture`}
                className='rounded-full'
                height={28}
                src={customer.imageUrl}
                width={28}
              />
              <p>{customer.name}</p>
            </div>
          </div>
          <p className='text-gray-500 text-sm'>{customer.email}</p>
        </div>
      </div>
      <div className='flex w-full items-center justify-between border-gray-200 border-b py-5'>
        <div className='flex w-1/2 flex-col'>
          <p className='text-xs'>Pending</p>
          <p className='font-medium'>
            {/* @ts-expect-error: add this field to prisma query */}
            {customer.total_pending}
          </p>
        </div>
        <div className='flex w-1/2 flex-col'>
          <p className='text-xs'>Paid</p>
          {/* @ts-expect-error: add this field to prisma query */}
          <p className='font-medium'>{customer.total_paid}</p>
        </div>
      </div>
      <div className='pt-4 text-sm'>
        {/* @ts-expect-error: add this field to prisma query */}
        <p>{customer.total_invoices} invoices</p>
      </div>
    </div>
  ));

  const customerListBodyJSX = props.customerList.map((customer) => (
    <tr className='group' key={customer.id}>
      <td className='whitespace-nowrap bg-white py-5 pr-3 pl-4 text-black text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6'>
        <div className='flex items-center gap-3'>
          <Image
            alt={`${customer.name}'s profile picture`}
            className='rounded-full'
            height={28}
            src={customer.imageUrl}
            width={28}
          />
          <p>{customer.name}</p>
        </div>
      </td>
      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm'>
        {customer.email}
      </td>
      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm'>
        {/* @ts-expect-error: add this field to prisma query */}
        {customer.total_invoices}
      </td>
      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm'>
        {/* @ts-expect-error: add this field to prisma query */}
        {customer.total_pending}
      </td>
      <td className='whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md'>
        {/* @ts-expect-error: add this field to prisma query */}
        {customer.total_paid}
      </td>
    </tr>
  ));

  return (
    <div className='w-full'>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>

      <Suspense>
        <SearchField placeholder='Search customers...' />
      </Suspense>

      <div className='mt-6 flow-root'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0'>
              <div className='md:hidden'>{customerListHeadJSX}</div>

              <table className='hidden min-w-full rounded-md text-gray-900 md:table'>
                <thead className='rounded-md bg-gray-50 text-left font-normal text-sm'>
                  <tr>
                    <th className='px-4 py-5 font-medium sm:pl-6' scope='col'>
                      Name
                    </th>
                    <th className='px-3 py-5 font-medium' scope='col'>
                      Email
                    </th>
                    <th className='px-3 py-5 font-medium' scope='col'>
                      Total Invoices
                    </th>
                    <th className='px-3 py-5 font-medium' scope='col'>
                      Total Pending
                    </th>
                    <th className='px-4 py-5 font-medium' scope='col'>
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-200 text-gray-900'>
                  {customerListBodyJSX}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Types */
interface CustomerTableProps {
  customerList: Customer[];
}

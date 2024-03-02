import { getCustomers } from '@/app/lib/data';
import { garamond } from '@/app/ui/fonts';
import React from 'react';
import { Customer } from '@/app/lib/definitions';
import Image from 'next/image';

const Page = async () => {
  const customers: Customer[] = await getCustomers();
  console.log(customers);
  return (
    <>
      <div className={`${garamond.className} mb-5 text-xl`}>
        <h1 className="text-3xl">Customers</h1>
      </div>
      <div className="rounded-md  p-4">
        <ul className="space-y-4">
          {customers.map((customer) => (
            <li
              key={customer.id}
              className="flex items-center space-x-4 rounded-md bg-blue-600 p-4"
            >
              <Image
                src={customer.image_url}
                alt={customer.name}
                width={28}
                height={28}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">{customer.name}</p>
                <p className="text-gray-300">{customer.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;

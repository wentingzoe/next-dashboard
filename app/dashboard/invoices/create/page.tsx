import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creating Invoices',
};
export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      {/* Breadcrumbs component is used to provide a navigation trail for users to follow back to higher-level sections of the application.*/}
      {/* Clickable titles to go back */}
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />

      <Form customers={customers} />
    </main>
  );
}

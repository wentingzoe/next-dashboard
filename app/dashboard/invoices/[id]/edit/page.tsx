import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
//Import a new function called fetchInvoiceById and pass the id as an argument.
//Import fetchCustomers to fetch the customer names for the dropdown.
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  // In order to fetch the invoice data, you need to call the fetchInvoice function with the id parameter
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  // Promise.all(): This function takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved.
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}

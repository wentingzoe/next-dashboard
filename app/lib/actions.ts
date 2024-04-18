'use server';
//similar state management logic can be used in the server-side code.

import {z} from 'zod';
//`zod` is a TypeScript-first schema declaration and validation library.
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
})
const CreateInvoice = FormSchema.omit({ id: true, date: true });
export async function createInvoice(formData: FormData) {
	const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
	
	const amountInCents = amount * 100;
	const date = new Date().toISOString().split('T')[0];
	 
	await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
	revalidatePath('/dashboard/invoices');
	redirect('/dashboard/invoices');
}
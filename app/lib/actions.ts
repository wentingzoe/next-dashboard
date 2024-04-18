'use server';
//similar state management logic can be used in the server-side code.
 
export async function createInvoice(formData: FormData) {
	  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}
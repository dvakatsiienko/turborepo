/* Core */
import NextImage from 'next/image';

/* Components */
import { UpdateInvoice, DeleteInvoice } from './Buttons';
import { InvoiceStatus } from './InvoiceStatus';

/* Instruments */
import { fetchInvoiceListFiltered } from '@/lib/queries';
import { formatDateToLocal, formatCurrency } from '@/lib/utils';

export const InvoiceTable = async (props: InvoiceTableProps) => {
    const invoicesList = await fetchInvoiceListFiltered(props.query, props.currentPage);

    const invoiceListMobileJSX = invoicesList?.map((invoice) => (
        <div key = { invoice.id } className = 'mb-2 w-full rounded-md bg-white p-4'>
            <div className = 'flex items-center justify-between border-b border-gray-200 pb-4'>
                xxx
                <div>
                    <div className = 'mb-2 flex items-center'>
                        <NextImage
                            alt = { `${ invoice.customer.name }'s profile picture` }
                            className = 'mr-2 rounded-full'
                            height = { 28 }
                            src = { invoice.customer.imageUrl ?? '' }
                            width = { 28 }
                        />
                        <p>{invoice.customer.name}</p>
                    </div>
                    <p className = 'text-sm text-gray-500'>{invoice.customer.email}</p>
                </div>
                <InvoiceStatus status = { invoice.status } />
            </div>
            <div className = 'flex w-full items-center justify-between pt-4'>
                <div>
                    <p className = 'text-xl font-medium'>{formatCurrency(invoice.amount)}</p>
                    <p>{formatDateToLocal(invoice.createdAt)}</p>
                </div>
                <div className = 'flex justify-end gap-2'>
                    <UpdateInvoice id = { invoice.id } />
                    <DeleteInvoice id = { invoice.id } />
                </div>
            </div>
        </div>
    ));

    const invoiceListDesktopJSX = invoicesList?.map((invoice) => (
        <tr
            key = { invoice.id }
            className = 'w-full border-b border-gray-200 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'>
            <td className = 'whitespace-nowrap py-3 pl-6 pr-3'>
                <div className = 'flex items-center gap-3'>
                    <NextImage
                        alt = { `${ invoice.customer.name }'s profile picture` }
                        className = 'rounded-full'
                        height = { 28 }
                        src = { invoice.customer.imageUrl ?? '' }
                        width = { 28 }
                    />
                    <p>{invoice.customer.name}</p>
                </div>
            </td>
            <td className = 'whitespace-nowrap px-3 py-3'>{invoice.customer.email}</td>
            <td className = 'whitespace-nowrap px-3 py-3'>{formatCurrency(invoice.amount)}</td>
            <td className = 'whitespace-nowrap px-3 py-3'>{formatDateToLocal(invoice.createdAt)}</td>
            <td className = 'whitespace-nowrap px-3 py-3'>
                <InvoiceStatus status = { invoice.status } />
            </td>
            <td className = 'whitespace-nowrap py-3 pl-6 pr-3'>
                <div className = 'flex justify-end gap-3'>
                    <UpdateInvoice id = { invoice.id } />
                    <DeleteInvoice id = { invoice.id } />
                </div>
            </td>
        </tr>
    ));

    return (
        <div className = 'mt-6 flow-root'>
            <div className = 'inline-block min-w-full align-middle'>
                <div className = 'rounded-lg bg-gray-50 p-2 md:pt-0'>
                    <div className = 'md:hidden'>{invoiceListMobileJSX}</div>

                    <table className = 'hidden min-w-full text-gray-900 md:table'>
                        <thead className = 'rounded-lg text-left text-sm font-normal'>
                            <tr>
                                <th className = 'px-4 py-5 font-medium sm:pl-6' scope = 'col'>
                                    Customer
                                </th>
                                <th className = 'px-3 py-5 font-medium' scope = 'col'>
                                    Email
                                </th>
                                <th className = 'px-3 py-5 font-medium' scope = 'col'>
                                    Amount
                                </th>
                                <th className = 'px-3 py-5 font-medium' scope = 'col'>
                                    Date
                                </th>
                                <th className = 'px-3 py-5 font-medium' scope = 'col'>
                                    Status
                                </th>
                                <th className = 'relative py-3 pl-6 pr-3' scope = 'col'>
                                    <span className = 'sr-only'>Edit</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody className = 'bg-white'>{invoiceListDesktopJSX}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

/* Types */
interface InvoiceTableProps {
    query:       string,
    currentPage: number,
}

/* Core */
import { BanknotesIcon, ClockIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';

/* Instruments */
import { lusitana } from '@/ui/fonts';

export const CardWrapper = () => {
    return (
        <>
            {/* NOTE: Uncomment this code in Chapter 9 */}

            {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
        </>
    );
};

export const Card = (props: CardProps) => {
    const Icon = iconMap[ props.type ];

    return (
        <div className = 'rounded-xl bg-gray-50 p-2 shadow-sm'>
            <div className = 'flex p-4'>
                {Icon ? <Icon className = 'h-5 w-5 text-gray-700' /> : null}
                <h3 className = 'ml-2 text-sm font-medium'>{props.title}</h3>
            </div>
            <p
                className = { `${ lusitana.className } truncate rounded-xl bg-white px-4 py-8 text-center text-2xl` }>
                {props.value}
            </p>
        </div>
    );
};

/* Helpers */
const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending:   ClockIcon,
    invoices:  InboxIcon,
};

/* Types */
interface CardProps {
    title: string,
    value: number | string,
    type:  'invoices' | 'customers' | 'pending' | 'collected',
}
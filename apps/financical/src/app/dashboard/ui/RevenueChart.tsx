/* Core */
import { CalendarIcon } from '@heroicons/react/24/outline';

/* Instruments */
import { fetchRevenueList } from '@/lib/sql';
import { generateYAxis } from '@/lib/utils';
import { lusitana } from '@/ui/fonts';
import type { Revenue } from '@/lib/definitions';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/
export const RevenueChart = async () => {
    const revenueList = await fetchRevenueList();

    const chartHeight = 350;

    const { yAxisLabels, topLabel } = generateYAxis(revenueList);

    if (!revenueList || revenueList.length === 0) {
        return <p className = 'mt-4 text-gray-400'>No data available.</p>;
    }

    const revenueListJSX = revenueList.map((month) => (
        <div key = { month.month } className = 'flex flex-col items-center gap-2'>
            <div
                className = 'w-full rounded-md bg-blue-300'
                style = {{ height: `${ (chartHeight / topLabel) * month.revenue }px` }}
            />
            <p className = '-rotate-90 text-sm text-gray-400 sm:rotate-0'>{month.month}</p>
        </div>
    ));

    return (
        <div className = 'w-full md:col-span-4'>
            <h2 className = { `${ lusitana.className } mb-4 text-xl md:text-2xl` }>Recent Revenue</h2>

            <div className = 'rounded-xl bg-gray-50 p-4'>
                <div className = 'sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4'>
                    <div
                        className = 'mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex'
                        style = {{ height: `${ chartHeight }px` }}>
                        {yAxisLabels.map((label) => (
                            <p key = { label }>{label}</p>
                        ))}
                    </div>

                    {revenueListJSX}
                </div>

                <div className = 'flex items-center pb-2 pt-6'>
                    <CalendarIcon className = 'h-5 w-5 text-gray-500' />
                    <h3 className = 'ml-2 text-sm text-gray-500'>Last 12 months</h3>
                </div>
            </div>
        </div>
    );
};
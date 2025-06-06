/* Core */
import { cx } from 'cva';

/* Components */
import { ExternalLinkSvg } from './icons/ExternalLinkSvg';

export const ExternalLink = (props: ExternalLinkProps) => {
    return (
        <a
            href={props.href ?? '#'}
            rel='noreferrer noopener'
            className={cx('relative inline-flex items-center gap-0.5', props.className)}
            target='_blank'>
            {props.children}
            <ExternalLinkSvg className='mb-2 inline-flex size-2.5 fill-current' />
        </a>
    );
};

/* Types */
interface ExternalLinkProps extends React.PropsWithChildren {
    href?: string;
    className?: string;
}

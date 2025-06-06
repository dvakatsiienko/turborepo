/* Instruments */
import type { TSvgProps } from './types';

export const WebpackSVG = (props: TSvgProps) => {
    const { size = 10, ...restProps } = props;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600' width={size} height={size} {...restProps}>
            <title>Webpack</title>
            <path fill='#FFF' d='M300 .1L565 150v299.9L300 599.8 35 449.9V150z' />
            <path
                fill='#8ED6FB'
                d='M517.7 439.5L308.8 557.8v-92L439 394.1l78.7 45.4zm14.3-12.9V179.4l-76.4 44.1v159l76.4 44.1zM81.5 439.5l208.9 118.2v-92l-130.2-71.6-78.7 45.4zm-14.3-12.9V179.4l76.4 44.1v159l-76.4 44.1zm8.9-263.2L290.4 42.2v89l-137.3 75.5-1.1.6-75.9-43.9zm446.9 0L308.8 42.2v89L446 206.8l1.1.6 75.9-44z'
            />
            <path
                fill='#1C78C0'
                d='M290.4 444.8L162 374.1V234.2l128.4 74.1v136.5zm18.4 0l128.4-70.6v-140l-128.4 74.1v136.5zM299.6 303zm-129-85l129-70.9L428.5 218l-128.9 74.4-129-74.4z'
            />
        </svg>
    );
};

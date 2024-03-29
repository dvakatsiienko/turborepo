/* Core */
import { useRouter } from 'next/router';
import { Tooltip } from '@nextui-org/react';
import styled from 'styled-components';
import { Aperture as ApertureIcon } from '@styled-icons/feather/Aperture';
import { useSession } from 'next-auth/react';
import type { StyledIconProps } from '@styled-icons/styled-icon';

/* Components */
import { NavLink } from './NavLink';
import { LogoutButton } from './LogoutButton';

import packageJson from '@/../package.json';

export const Nav = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const isLoggedIn = Boolean(session) && !router.pathname.includes('/login');

    return (
        <Container>
            <Tooltip
                content = { `
                App version: ${ packageJson.version }
            ` }>
                <Aperture
                    $isLoggedIn = { isLoggedIn }
                    width = { 24 }
                    onPointerUp = { () => router.push('/') }
                />
            </Tooltip>
            <span>/</span>
            <NavLink active = { router.pathname === '/' } content = 'home' href = '/' />
            <span>/</span>
            <NavLink active = { router.pathname.includes('new') } content = 'new' href = '/new/1' />
            <span>/</span>
            <NavLink active = { router.pathname.includes('top') } content = 'top' href = '/top' />
            <span>/</span>
            <NavLink
                active = { router.pathname.includes('search') }
                content = 'search'
                href = '/search/1'
            />
            <span>/</span>

            {!isLoggedIn && (
                <NavLink active = { router.pathname.includes('login') } content = 'login' href = '/login' />
            )}

            {isLoggedIn ? (
                <>
                    <NavLink
                        active = { router.pathname.includes('profile') }
                        content = 'profile'
                        href = '/profile'
                    />
                    <span>/</span>
                    <LogoutButton />
                </>
            ) : null}
        </Container>
    );
};

/* Styles */
const Container = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 8px;
    height: 32px;
    padding: 0 var(--content-h-padding);
    user-select: none;

    & span {
        display: flex;
        align-items: center;
    }

    & .active {
        text-decoration: underline;
    }
`;

const Aperture = styled(ApertureIcon)<StyledIconProps & { $isLoggedIn: boolean }>`
    cursor: pointer;
    color: ${ (p) => (p.$isLoggedIn ? 'green' : 'red') };

    &:hover {
        color: purple;
    }
`;

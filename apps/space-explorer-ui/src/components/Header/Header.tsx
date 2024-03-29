/* Core */
import styled from 'styled-components';

/* Instruments */
import { SPACING, COLORS } from '@/styles';
import dog1Png from './img/dog-1.png';
import dog2Png from './img/dog-2.png';
import dog3Png from './img/dog-3.png';

export const Header = (props: HeaderProps) => {
    const { image, title } = props;
    const email = window.atob(localStorage.getItem('token') as string);
    const avatar = image || pickAvatarByEmail('test@email.com');

    return (
        <Container>
            <Image $round = { !image } alt = 'Space dog' src = { avatar } />
            <div>
                <h2>{title}</h2>
                <Subheading>{email}</Subheading>
            </div>
        </Container>
    );
};

/* Styles */
const Container = styled('div')({
    // position:     'sticky',
    // top:          0,
    display:      'flex',
    alignItems:   'center',
    marginBottom: SPACING * 4.5,
});

const Image = styled.img<{ $round: boolean }>`
    width: 135px;
    height: 135px;
    margin-right: ${ SPACING * 2.5 }px;
    border-radius: ${ (props) => (props.$round ? '50%' : '0%') };
`;

const Subheading = styled('h5')({
    marginTop: SPACING / 2,
    color:     COLORS.textSecondary,
});

/* Helpers */
const max = 25; // 25 letters in the alphabet
const offset = 97; // letter A's charcode is 97
const avatars = [ dog1Png, dog2Png, dog3Png ];
const maxIndex = avatars.length - 1;

function pickAvatarByEmail (email: string) {
    const charCode = email.toLowerCase().charCodeAt(0) - offset;
    const percentile = Math.max(0, Math.min(max, charCode)) / max;

    return avatars[ Math.round(maxIndex * percentile) ];
}

/* Types */
interface HeaderProps {
    title:  string,
    image?: string,
}

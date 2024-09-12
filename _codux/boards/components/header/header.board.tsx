import { createBoard } from '@wixc3/react-board';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { Header } from '~/components/header/header';
import styles from './header.board.module.scss';

export default createBoard({
    name: 'Header',
    Board: () => (
        <ComponentWrapper>
            <Header className={styles.header} />
        </ComponentWrapper>
    ),
});

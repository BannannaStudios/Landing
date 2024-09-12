import { createBoard } from '@wixc3/react-board';
import ComponentWrapper from '_codux/board-wrappers/component-wrapper';
import { Footer } from '~/components/site-footer/site-footer';
import styles from './footer.board.module.scss';

export default createBoard({
    name: 'Footer',
    Board: () => (
        <ComponentWrapper>
            <Footer className={styles.footer} />
        </ComponentWrapper>
    ),
    environmentProps: {
        windowHeight: 621,
    },
});

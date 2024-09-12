import classNames from 'classnames';
import styles from './site-footer.module.scss';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.details}>
                <div className={styles.div1}>© Bannanna / Studios. All rights reserved.</div>
                <div className={styles.small}>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

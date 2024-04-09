import React, {useState} from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';
import {CardPropsType} from '../../common/types';


export const Card: React.FC<CardPropsType> = ({id, title, description}) => {
    const [shadowIsChanged, setShadowIsChanged] = useState(false)

    const shadowHandler = () => {
        !shadowIsChanged && setShadowIsChanged(true)
        shadowIsChanged && setShadowIsChanged(false)

    }

    const shadowClasses = clsx(styles.card, {
        [styles['card_shadow-black']]: true,
        [styles['card_shadow-red']]: shadowIsChanged,
    })

    return (
        <div className={shadowClasses} onClick={shadowHandler}>
            <p className={styles.card__title}>{title}</p>
            <p className={styles.card__description}>{description}</p>
        </div>
    );
};

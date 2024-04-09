import React from 'react';
import styles from './Container.module.scss';
import clsx from 'clsx';
import {ContainerPropsType} from '../../common/types';


export const Container: React.FC<ContainerPropsType> = ({children, left}) => {

    return (
        <div className={clsx(styles.container)}>
            {children}
        </div>
    );
};

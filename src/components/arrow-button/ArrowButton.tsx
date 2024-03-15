import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = () => void;

export type PopsArrowButton = {
	onClick?: OnClick;
	isOpen: boolean;
};

export const ArrowButton = (props: PopsArrowButton) => {
	return (
		<div
			onClick={props.onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(
				styles.container,
				props.isOpen ? styles.container_open : ''
			)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, props.isOpen ? styles.arrow_open : '')}
			/>
		</div>
	);
};

import styles from './index.less';
import React, { useState, useRef, useEffect } from 'react';


const Header: React.FC = (props) => {


	return (
		<div>
			<h1 className={styles.title}>Header</h1>
			{props?.children}
		</div>
	);

}

export default Header;
import styles from './index.less';
import React, { useState, useRef, useEffect } from 'react';


const Welcome: React.FC = () => {

	return (
		<div>
			<h1 className={styles.title}>Page Welcome</h1>
		</div>
	);

}

export default Welcome;
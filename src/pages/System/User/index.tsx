import styles from './index.less';
import { Button, Result, Pagination } from 'antd';
import React, { useState, useRef, useEffect } from 'react';


const Login: React.FC = (props) => {


	return (
		<div>
			<h1 className={styles.title}>Page Login</h1>
			<Button type="primary">Primary Button</Button>
			<Pagination defaultCurrent={1} total={50} />;
			<Result />
		</div>
	);

}

export default Login;
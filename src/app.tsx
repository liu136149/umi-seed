import type { RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import defaultSettings from '../config/defaultSettings';
import RightContent from '@/components/RightContent';
import { getUserInfo } from './services/system/user';


const loginPath = '/login';

export async function getInitialState() {
	const user = {
		id: 1,
		name: "zhangsana",
		pwd: "123"
	};
	const data = await new Promise(function (resolve, reject) {
		resolve(user);
	});
	return {
		currentUser: data,
		settings: defaultSettings
	};
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
	return {
		rightContentRender: () => <RightContent />,
	};
};
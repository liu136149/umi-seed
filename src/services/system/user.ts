// @ts-ignore
/* eslint-disable */
import { request } from 'umi';



/** 用户登录接口 */
export async function login(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/login.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		params: { ...body },
		...(options || {}),
	});
}

/** 用户登出接口 */
export async function logOut(options?: { [key: string]: any }) {
	return request<any>('/system/QT.do', {
		method: 'POST',
		credentials: "include",
		...(options || {}),
	});
};



/** 获取用户信息接口 */
export async function getUserInfo(options?: { [key: string]: any }) {
	return request<any>('/system/menu/queryMenu.do', {
		method: 'POST',
		credentials: "include",
		// headers: {

		// },
		...(options || {}),

	});
};

/** 获取用户列表接口 */
export async function getUserList(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/user/queryList.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		params: { ...body },
		...(options || {}),
	});
};


/** 添加新用户接口 */

export async function addUserInformation(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/user/addUser.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		params: { ...body },
		...(options || {}),
	});
};

/** 更新用户信息接口 */

export async function updateUserInformation(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/user/UpdateData.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
		params: { ...body },
		...(options || {}),
	});
};

/**  更新用户密码接口 */
export async function updateUserPwd(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/user/ResetPwd.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
		params: { ...body },
		...(options || {}),
	});
};

/** 删除用户接口 */
export async function deleteUser(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/user/DeleteData.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
		params: { ...body },
		...(options || {}),
	});
};

/** 停用用户接口 */
export async function stopUser(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/user/Stop.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
		params: { ...body },
		...(options || {}),
	});
};

/** 启用用户接口 */
export async function startUser(body: any, options?: { [key: string]: any }) {
	return request<any>('/system/user/Start.do', {
		method: 'POST',
		credentials: "include",
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
		params: { ...body },
		...(options || {}),
	});
};











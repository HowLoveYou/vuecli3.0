const getters = {
	sidebar: state => state.layoutt.sidebar,
	visitedViews: state => state.tags.visitedViews,
	cachedViews: state => state.tags.cachedViews,

	zhcq: state => state.user.zhcq,
	token: state => state.user.token,
	userInfo: state => state.user.userInfo,
	roles: state => state.user.roles,
}

export default getters
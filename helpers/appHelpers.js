module.exports = {
	checkEnvVars(env) {
		return ['BOT_TOKEN', 'DB_HOST', 'ADMIN', 'NODE_ENV'].some((element) => {
			return env[element] === '' || env[element] === undefined;
		});
	},
};

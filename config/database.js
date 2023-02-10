module.exports = ({ env }) => ({
	connection: {
		client: "postgres",
		connection: {
			connectionString:
				"postgresql://postgres:0L4YrvTKIHbbpdjvBYh1@containers-us-west-121.railway.app:7726/railway",
			ssl: {
				rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
			},
		},
		debug: false,
	},
});

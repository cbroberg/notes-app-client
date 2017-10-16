export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	s3: {
		BUCKET: "react-notes-app-uploads"
	},
	apiGateway: {
		REGION: "us-east-1",
		URL: "https://clpgpis47a.execute-api.us-east-1.amazonaws.com/prod"
	},
	cognito: {
		REGION: "us-east-1",
		USER_POOL_ID: "us-east-1_cayMvxHZ7",
		APP_CLIENT_ID: "1nsrjatuh22cdcttskcov7dd0r",
		IDENTITY_POOL_ID: "us-east-1:a256be78-fc35-46fb-9595-d147594af36b"
	}
}

module.exports = {
  apps : [{
    name: 'nettu-meet',
    script: 'node',
    args: '--require ts-node/register ./src/index.ts',
    watch: 'src',
    env: {
      NETTU_REDIS_HOST: 'localhost',
      NETTU_REDIS_PORT: '6379',
      MONGODB_CONNECTION_STRING: 'mongodb://root:rootpassword@localhost:27017',
      MONGODB_NAME: 'nettu-meeting',
      FRONTEND_URL: 'http://localhost:3000',
      SERVER_DOMAIN_NAME: 'localhost:5000',
      SES_EMAIL_SOURCE: '',
      S3_BUCKET: '',
      AWS_SECRET_ACCESS_KEY: '',
      AWS_ACCESS_KEY_ID: '',
      LISTEN_IP: '127.0.0.1',
      ACCOUNCEMENT_IP: '127.0.0.1',
      ACCOUNT_NAME: 'nettumeet',
      ACCOUNT_LABEL: 'Nettu Meet',
      ACCOUNT_SECRET_KEY: 'nettu_meet_default_secret',
      ACCOUNT_REDIRECT_URI: 'http://localhost:3000',
      ACCOUNT_REDIRECT_URIS: '',
      NETTU_IS_PRODUCTION: 'false'
    }
  }]
};

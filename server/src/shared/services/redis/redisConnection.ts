import redis, { RedisClient } from 'redis';
import { authConfig, isProduction } from '../../../config';

const port = authConfig.redisServerPort;
const host = authConfig.redisServerHost;
const password = authConfig.redisPassword;

const redisConnection: RedisClient = isProduction
    ? redis.createClient(authConfig.redisConnectionString)
    : redis.createClient({ port, host, password }); // creates a new client

redisConnection.on('connect', () => {
    console.log(`[Redis]: Connected to redis server at ${host}:${port}`);
});

export { redisConnection };

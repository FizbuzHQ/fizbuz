const AUTH_CONFIG = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    audience: process.env.AUTH0_AUDIENCE,
    useRefreshTokens: process.env.AUTH0_USE_REFRESH_TOKENS,
    cacheLocation: process.env.AUTH0_CACHE_LOCATION,
};

export default AUTH_CONFIG;

const AUTH_CONFIG = {
    domain: process.env.REACT_APP_DOMAIN,
    clientId: process.env.REACT_APP_CLIENT_ID,
    audience: process.env.REACT_APP_AUDIENCE,
    useRefreshTokens: process.env.REACT_APP_USE_REFRESH_TOKENS,
    cacheLocation: process.env.REACT_APP_CACHE_LOCATION,
};

export default AUTH_CONFIG;

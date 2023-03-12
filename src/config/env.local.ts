
export const config = {
    port: process.env.PORT || 4000,
    db: {
        host: process.env.DB_HOST || '127.0.0.1',
        port: process.env.DB_PORT || '27017',
        name: process.env.DB_NAME || 'ts-db'
    }
};
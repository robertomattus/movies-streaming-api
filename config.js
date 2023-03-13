require('dotenv').config()

const configs = {
    api: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:3000',
        nodeEnv: process.env.NODE_ENV || 'development',
        secretOrKey : process.env.JWT_SECRET,
        firebase: {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOM,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET
        }
    },
    db: {
        development: {
            dialect: process.env.DIALECT,
            host: process.env.LOCAL_DB_HOST, 
            port: process.env.LOCAL_DB_PORT,
            username: process.env.LOCAL_DB_USERNAME,
            password: process.env.LOCAL_DB_PASSWORD,
            database: process.env.LOCAL_DB_NAME,
            define: {
                timestamps: true, 
                underscored: true,
                underscoredAll: true 
            }
        },
        production: {
            dialect: process.env.DIALECT,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            define: {
                timestamps: true, 
                underscored: true,
                underscoredAll: true 
            },
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        },
        testing: {
            dialect: process.env.DIALECT,
            host: process.env.LOCAL_DB_HOST,
            port: process.env.LOCAL_DB_PORT,
            username: process.env.LOCAL_DB_USERNAME,
            password: process.env.LOCAL_DB_PASSWORD,
            database: process.env.LOCAL_DB_NAME,
            define: {
                timestamps: true, 
                underscored: true,
                underscoredAll: true 
            }
        }
    }
}

module.exports = configs
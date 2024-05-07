/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        firebase_apiKey: process.env.firebase_apiKey,
        firebase_apiKey: process.env.firebase_authDomain,
        firebase_apiKey: process.env.firebase_databaseURL,
        firebase_apiKey: process.env.firebase_projectId,
        firebase_apiKey: process.env.firebase_storageBucket,
        firebase_apiKey: process.env.firebase_messagingSenderId,
        firebase_apiKey: process.env.firebase_appId,
        firebase_apiKey: process.env.firebase_measurementId,
    }
};

export default nextConfig;

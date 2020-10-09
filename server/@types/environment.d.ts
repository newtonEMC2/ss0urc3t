/* eslint-disable no-unused-vars */

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string
            PORT: string
            PORT_TEST: string
            SECRET: string
        }
    }
}

export { }

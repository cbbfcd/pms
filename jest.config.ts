// eslint-disable-next-line node/no-extraneous-import
import type { Config } from '@jest/types'

// https://jestjs.io/docs/configuration
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['**/*.spec.[jt]s?(x)'],
  testTimeout: process.env.CI ? 30000 : 10000,
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': '@sucrase/jest-plugin'
  }
}

export default config

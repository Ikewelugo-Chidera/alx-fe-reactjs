import { readFileSync } from 'fs';

export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  extensionsToTreatAsEsm: [".jsx"]
};
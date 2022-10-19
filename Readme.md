# Forex Demo

[![wakatime](https://wakatime.com/badge/user/6c7eda5f-06cc-438e-b719-cac475d4bed6/project/fee1309b-c701-49fe-912e-151cc03f0161.svg)](https://wakatime.com/badge/user/6c7eda5f-06cc-438e-b719-cac475d4bed6/project/fee1309b-c701-49fe-912e-151cc03f0161) [![codecov](https://codecov.io/gh/suphero/forex-demo/branch/master/graph/badge.svg?token=PBSKF0QdEn)](https://codecov.io/gh/suphero/forex-demo)

## Commands

- `npm run dev`: Start Development Server
- `npm run build`: TS compile to dist folder
- `npm start`: Start production server
- `npm run lint`: Prettify codebase
- `npm test`: Run tests
- `npm run test:watch`: Run tests in watch mode
- `npm run doc`: Generate documentation under docs/api folder

## Environmental Variables

[Schema](./.env.schema) for the environmental variable is included.

### PORT (Optional)

Specify port. Default is 3000.

`PORT=8080`

### PROVIDER (Optional)

- `PROVIDER=ER`: exchangeratesapi.io (Default)
- `PROVIDER=FX`: fixer.io

### EXCHANGERATES_API_KEY (Cond. Required)

This variable is required when the [Provider](#provider-optional) selected ER.

`EXCHANGERATES_API_KEY=API_KEY`

### EXCHANGERATES_PREMIUM_PLAN (Optional)

If the [Provider](#provider-optional) selected ER, the plan type should be selected.

- `EXCHANGERATES_PREMIUM_PLAN=false` -> Free Plan (Default)
- `EXCHANGERATES_PREMIUM_PLAN=true`: Premium Plan

### FIXER_API_KEY (Cond. Required)

This variable is required when the [Provider](#provider-optional) selected FX.

`FIXER_API_KEY=API_KEY`

### REPOSITORY (Optional)

- `REPOSITORY=RAM` -> Memory Repository (Default)
- `REPOSITORY=JSON` -> Json File

### REPOSITORY_FILE_PATH (Cond. Required)

This variable is required when the [Repository](#repository-optional) selected JSON.

`REPOSITORY_FILE_PATH=JSON_PATH`

## TODO

- [ ] next(error)'lardan kurtul
- [ ] Joi.alternatives Conflicting error message

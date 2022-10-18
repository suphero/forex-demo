# Forex Demo

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

Specify http port. Default is 3000.

### PROVIDER (Optional)

- ER -> exchangeratesapi.io (Default)
- FX -> fixer.io

### EXCHANGERATES_API_KEY (Cond. Required)

This variable is required when the [Provider](#provider-optional) selected ER.

### EXCHANGERATES_PREMIUM_PLAN (Optional)

If the [Provider](#provider-optional) selected ER, the plan type should be selected.

- false -> Free Plan (Default)
- true -> Premium Plan

### FIXER_API_KEY (Cond. Required)

This variable is required when the [Provider](#provider-optional) selected FX.

### REPOSITORY (Optional)

- RAM -> Memory Repository (Default)
- JSON -> Json File

### REPOSITORY_FILE_PATH (Cond. Required)

This variable is required when the [Repository](#repository-optional) selected JSON.

## TODO

- [ ] Joi.alternatives Conflicting error message

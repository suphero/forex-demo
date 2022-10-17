# Forex Demo

## Environmental Variables

[Schema](./.env.schema) for the environmental variable is included.

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
- [ ] Endpoint Documentation / Postman schema
- [ ] Joi Validation Middleware
- [ ] Test Case Names

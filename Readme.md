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

### Example .env Files

#### exchangeratesapi.io Free Version

```env
PROVIDER=ER
EXCHANGERATES_API_KEY=MY_API_KEY
```

#### exchangeratesapi.io Premium Version

```env
PROVIDER=ER
EXCHANGERATES_API_KEY=MY_API_KEY
EXCHANGERATES_PREMIUM_PLAN=true
```

#### fixer.io

```env
PROVIDER=FX
FIXER_API_KEY=MY_API_KEY
```

## TODO

- [ ] Unit Test
- [ ] Prettier
- [ ] Joi.alternatives Conflicting error message
- [ ] Endpoint Documentation / Postman schema
- [ ] Test with Docker
- [ ] typedi use
- [ ] data factory for alternative usages
- [ ] persistent data
- [ ] Typescript
- [ ] Move to CommonJS
- [ ] Joi Validation Middleware

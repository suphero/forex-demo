[forex-demo](../README.md) / [Exports](../modules.md) / [lib/helpers/errors](../modules/lib_helpers_errors.md) / BaseError

# Class: BaseError

[lib/helpers/errors](../modules/lib_helpers_errors.md).BaseError

Base Error class

## Hierarchy

- `Error`

  ↳ **`BaseError`**

  ↳↳ [`InvalidInputError`](lib_helpers_errors.InvalidInputError.md)

  ↳↳ [`ExternalApiError`](lib_helpers_errors.ExternalApiError.md)

  ↳↳ [`NotImplementedError`](lib_helpers_errors.NotImplementedError.md)

  ↳↳ [`MissingConfigurationError`](lib_helpers_errors.MissingConfigurationError.md)

## Table of contents

### Constructors

- [constructor](lib_helpers_errors.BaseError.md#constructor)

### Properties

- [message](lib_helpers_errors.BaseError.md#message)
- [name](lib_helpers_errors.BaseError.md#name)
- [stack](lib_helpers_errors.BaseError.md#stack)
- [statusCode](lib_helpers_errors.BaseError.md#statuscode)
- [prepareStackTrace](lib_helpers_errors.BaseError.md#preparestacktrace)
- [stackTraceLimit](lib_helpers_errors.BaseError.md#stacktracelimit)

### Methods

- [captureStackTrace](lib_helpers_errors.BaseError.md#capturestacktrace)

## Constructors

### constructor

• **new BaseError**(`name`, `statusCode`, `description?`)

Constructor

#### Parameters

| Name           | Type     | Description      |
| :------------- | :------- | :--------------- |
| `name`         | `string` | Name             |
| `statusCode`   | `number` | HTTP Status Code |
| `description?` | `string` | Description      |

#### Overrides

Error.constructor

#### Defined in

[src/lib/helpers/errors.ts:13](https://github.com/suphero/forex-demo/blob/2d16766/src/lib/helpers/errors.ts#L13)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

---

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

---

### statusCode

• **statusCode**: `number`

#### Defined in

[src/lib/helpers/errors.ts:21](https://github.com/suphero/forex-demo/blob/2d16766/src/lib/helpers/errors.ts#L21)

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4

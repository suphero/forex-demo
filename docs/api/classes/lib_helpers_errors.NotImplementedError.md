[forex-demo](../README.md) / [Exports](../modules.md) / [lib/helpers/errors](../modules/lib_helpers_errors.md) / NotImplementedError

# Class: NotImplementedError

[lib/helpers/errors](../modules/lib_helpers_errors.md).NotImplementedError

Not Implemented Error

## Hierarchy

- [`BaseError`](lib_helpers_errors.BaseError.md)

  ↳ **`NotImplementedError`**

## Table of contents

### Constructors

- [constructor](lib_helpers_errors.NotImplementedError.md#constructor)

### Properties

- [message](lib_helpers_errors.NotImplementedError.md#message)
- [name](lib_helpers_errors.NotImplementedError.md#name)
- [stack](lib_helpers_errors.NotImplementedError.md#stack)
- [statusCode](lib_helpers_errors.NotImplementedError.md#statuscode)
- [prepareStackTrace](lib_helpers_errors.NotImplementedError.md#preparestacktrace)
- [stackTraceLimit](lib_helpers_errors.NotImplementedError.md#stacktracelimit)

### Methods

- [captureStackTrace](lib_helpers_errors.NotImplementedError.md#capturestacktrace)

## Constructors

### constructor

• **new NotImplementedError**(`description?`)

Constructor

#### Parameters

| Name           | Type     | Description |
| :------------- | :------- | :---------- |
| `description?` | `string` | Description |

#### Overrides

[BaseError](lib_helpers_errors.BaseError.md).[constructor](lib_helpers_errors.BaseError.md#constructor)

#### Defined in

[src/lib/helpers/errors.ts:58](https://github.com/suphero/forex-demo/blob/ef493db/src/lib/helpers/errors.ts#L58)

## Properties

### message

• **message**: `string`

#### Inherited from

[BaseError](lib_helpers_errors.BaseError.md).[message](lib_helpers_errors.BaseError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

---

### name

• **name**: `string`

#### Inherited from

[BaseError](lib_helpers_errors.BaseError.md).[name](lib_helpers_errors.BaseError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

[BaseError](lib_helpers_errors.BaseError.md).[stack](lib_helpers_errors.BaseError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

---

### statusCode

• **statusCode**: `number`

#### Inherited from

[BaseError](lib_helpers_errors.BaseError.md).[statusCode](lib_helpers_errors.BaseError.md#statuscode)

#### Defined in

[src/lib/helpers/errors.ts:21](https://github.com/suphero/forex-demo/blob/ef493db/src/lib/helpers/errors.ts#L21)

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

[BaseError](lib_helpers_errors.BaseError.md).[prepareStackTrace](lib_helpers_errors.BaseError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[BaseError](lib_helpers_errors.BaseError.md).[stackTraceLimit](lib_helpers_errors.BaseError.md#stacktracelimit)

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

[BaseError](lib_helpers_errors.BaseError.md).[captureStackTrace](lib_helpers_errors.BaseError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4

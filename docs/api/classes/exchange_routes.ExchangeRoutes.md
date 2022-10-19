[forex-demo](../README.md) / [Exports](../modules.md) / [exchange/routes](../modules/exchange_routes.md) / ExchangeRoutes

# Class: ExchangeRoutes

[exchange/routes](../modules/exchange_routes.md).ExchangeRoutes

Exchange Routes

## Implements

- [`IRoutes`](../interfaces/lib_helpers_express.IRoutes.md)

## Table of contents

### Constructors

- [constructor](exchange_routes.ExchangeRoutes.md#constructor)

### Properties

- [controller](exchange_routes.ExchangeRoutes.md#controller)
- [path](exchange_routes.ExchangeRoutes.md#path)
- [router](exchange_routes.ExchangeRoutes.md#router)

### Methods

- [getExchangeRate](exchange_routes.ExchangeRoutes.md#getexchangerate)
- [intializeRoutes](exchange_routes.ExchangeRoutes.md#intializeroutes)

## Constructors

### constructor

• **new ExchangeRoutes**(`controller`)

Constructor

#### Parameters

| Name         | Type                                                              |
| :----------- | :---------------------------------------------------------------- |
| `controller` | [`ExchangeController`](exchange_controller.ExchangeController.md) |

#### Defined in

[src/exchange/routes.ts:20](https://github.com/suphero/forex-demo/blob/14e963f/src/exchange/routes.ts#L20)

## Properties

### controller

• **controller**: [`ExchangeController`](exchange_controller.ExchangeController.md)

#### Defined in

[src/exchange/routes.ts:15](https://github.com/suphero/forex-demo/blob/14e963f/src/exchange/routes.ts#L15)

---

### path

• **path**: `string` = `'/exchange'`

#### Implementation of

[IRoutes](../interfaces/lib_helpers_express.IRoutes.md).[path](../interfaces/lib_helpers_express.IRoutes.md#path)

#### Defined in

[src/exchange/routes.ts:13](https://github.com/suphero/forex-demo/blob/14e963f/src/exchange/routes.ts#L13)

---

### router

• **router**: `Router`

#### Implementation of

[IRoutes](../interfaces/lib_helpers_express.IRoutes.md).[router](../interfaces/lib_helpers_express.IRoutes.md#router)

#### Defined in

[src/exchange/routes.ts:14](https://github.com/suphero/forex-demo/blob/14e963f/src/exchange/routes.ts#L14)

## Methods

### getExchangeRate

▸ **getExchangeRate**(`req`, `res`, `next`): `Promise`<`void`\>

Get Exchange Route

#### Parameters

| Name   | Type                                                                                 | Description   |
| :----- | :----------------------------------------------------------------------------------- | :------------ |
| `req`  | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | Request       |
| `res`  | `Response`<`any`, `Record`<`string`, `any`\>\>                                       | Response      |
| `next` | `NextFunction`                                                                       | Next Function |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/exchange/routes.ts:38](https://github.com/suphero/forex-demo/blob/14e963f/src/exchange/routes.ts#L38)

---

### intializeRoutes

▸ **intializeRoutes**(): `void`

Initialize Routes

#### Returns

`void`

#### Defined in

[src/exchange/routes.ts:28](https://github.com/suphero/forex-demo/blob/14e963f/src/exchange/routes.ts#L28)

[forex-demo](../README.md) / [Modules](../modules.md) / [exchange/routes](../modules/exchange_routes.md) / ExchangeRoutes

# Class: ExchangeRoutes

[exchange/routes](../modules/exchange_routes.md).ExchangeRoutes

Exchange Routes

## Implements

- `IRoutes`

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

[exchange/routes.ts:20](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/routes.ts#L20)

## Properties

### controller

• **controller**: [`ExchangeController`](exchange_controller.ExchangeController.md)

#### Defined in

[exchange/routes.ts:15](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/routes.ts#L15)

---

### path

• **path**: `string` = `'/exchange'`

#### Implementation of

IRoutes.path

#### Defined in

[exchange/routes.ts:13](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/routes.ts#L13)

---

### router

• **router**: `Router`

#### Implementation of

IRoutes.router

#### Defined in

[exchange/routes.ts:14](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/routes.ts#L14)

## Methods

### getExchangeRate

▸ **getExchangeRate**(`req`, `res`, `next`): `Promise`<`void`\>

Get Exchange Route

#### Parameters

| Name   | Type                                                                                 |
| :----- | :----------------------------------------------------------------------------------- |
| `req`  | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res`  | `Response`<`any`, `Record`<`string`, `any`\>\>                                       |
| `next` | `NextFunction`                                                                       |

#### Returns

`Promise`<`void`\>

#### Defined in

[exchange/routes.ts:35](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/routes.ts#L35)

---

### intializeRoutes

▸ **intializeRoutes**(): `void`

Initialize Routes

#### Returns

`void`

#### Defined in

[exchange/routes.ts:28](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/routes.ts#L28)

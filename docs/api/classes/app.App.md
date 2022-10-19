[forex-demo](../README.md) / [Exports](../modules.md) / [app](../modules/app.md) / App

# Class: App

[app](../modules/app.md).App

App

## Table of contents

### Constructors

- [constructor](app.App.md#constructor)

### Properties

- [app](app.App.md#app)
- [routes](app.App.md#routes)

### Methods

- [initializeControllers](app.App.md#initializecontrollers)
- [initializeErrorHandlers](app.App.md#initializeerrorhandlers)
- [initializeMiddlewares](app.App.md#initializemiddlewares)

## Constructors

### constructor

• **new App**(`convertRoutes`, `exchangeRoutes`)

App Constructor

#### Parameters

| Name             | Type                                                  | Description      |
| :--------------- | :---------------------------------------------------- | :--------------- |
| `convertRoutes`  | [`ConvertRoutes`](convert_routes.ConvertRoutes.md)    | /convert Routes  |
| `exchangeRoutes` | [`ExchangeRoutes`](exchange_routes.ExchangeRoutes.md) | /exchange Routes |

#### Defined in

[src/app.ts:24](https://github.com/suphero/forex-demo/blob/2d16766/src/app.ts#L24)

## Properties

### app

• **app**: `Application`

#### Defined in

[src/app.ts:16](https://github.com/suphero/forex-demo/blob/2d16766/src/app.ts#L16)

---

### routes

• `Private` **routes**: [`IRoutes`](../interfaces/lib_helpers_express.IRoutes.md)[]

#### Defined in

[src/app.ts:17](https://github.com/suphero/forex-demo/blob/2d16766/src/app.ts#L17)

## Methods

### initializeControllers

▸ `Private` **initializeControllers**(): `void`

Initialize Controllers

#### Returns

`void`

#### Defined in

[src/app.ts:44](https://github.com/suphero/forex-demo/blob/2d16766/src/app.ts#L44)

---

### initializeErrorHandlers

▸ `Private` **initializeErrorHandlers**(): `void`

Initialize Error Handlers

#### Returns

`void`

#### Defined in

[src/app.ts:53](https://github.com/suphero/forex-demo/blob/2d16766/src/app.ts#L53)

---

### initializeMiddlewares

▸ `Private` **initializeMiddlewares**(): `void`

Initialize Middlewares

#### Returns

`void`

#### Defined in

[src/app.ts:36](https://github.com/suphero/forex-demo/blob/2d16766/src/app.ts#L36)

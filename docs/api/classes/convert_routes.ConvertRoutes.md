[forex-demo](../README.md) / [Modules](../modules.md) / [convert/routes](../modules/convert_routes.md) / ConvertRoutes

# Class: ConvertRoutes

[convert/routes](../modules/convert_routes.md).ConvertRoutes

Convert Routes

## Implements

- `IRoutes`

## Table of contents

### Constructors

- [constructor](convert_routes.ConvertRoutes.md#constructor)

### Properties

- [controller](convert_routes.ConvertRoutes.md#controller)
- [path](convert_routes.ConvertRoutes.md#path)
- [router](convert_routes.ConvertRoutes.md#router)

### Methods

- [createConversion](convert_routes.ConvertRoutes.md#createconversion)
- [findConversions](convert_routes.ConvertRoutes.md#findconversions)
- [intializeRoutes](convert_routes.ConvertRoutes.md#intializeroutes)

## Constructors

### constructor

• **new ConvertRoutes**(`controller`)

Constructor

#### Parameters

| Name         | Type                                                           |
| :----------- | :------------------------------------------------------------- |
| `controller` | [`ConvertController`](convert_controller.ConvertController.md) |

#### Defined in

[convert/routes.ts:20](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/convert/routes.ts#L20)

## Properties

### controller

• **controller**: [`ConvertController`](convert_controller.ConvertController.md)

#### Defined in

[convert/routes.ts:15](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/convert/routes.ts#L15)

---

### path

• **path**: `string` = `'/convert'`

#### Implementation of

IRoutes.path

#### Defined in

[convert/routes.ts:13](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/convert/routes.ts#L13)

---

### router

• **router**: `Router`

#### Implementation of

IRoutes.router

#### Defined in

[convert/routes.ts:14](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/convert/routes.ts#L14)

## Methods

### createConversion

▸ **createConversion**(`req`, `res`, `next`): `Promise`<`void`\>

Create Conversion

#### Parameters

| Name   | Type                                                                                 | Description   |
| :----- | :----------------------------------------------------------------------------------- | :------------ |
| `req`  | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | Request       |
| `res`  | `Response`<`any`, `Record`<`string`, `any`\>\>                                       | Response      |
| `next` | `NextFunction`                                                                       | Next Function |

#### Returns

`Promise`<`void`\>

#### Defined in

[convert/routes.ts:55](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/convert/routes.ts#L55)

---

### findConversions

▸ **findConversions**(`req`, `res`, `next`): `void`

Find Conversions

#### Parameters

| Name   | Type                                                                                 | Description   |
| :----- | :----------------------------------------------------------------------------------- | :------------ |
| `req`  | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | Request       |
| `res`  | `Response`<`any`, `Record`<`string`, `any`\>\>                                       | Response      |
| `next` | `NextFunction`                                                                       | Next Function |

#### Returns

`void`

#### Defined in

[convert/routes.ts:39](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/convert/routes.ts#L39)

---

### intializeRoutes

▸ **intializeRoutes**(): `void`

Initialize Routes

#### Returns

`void`

#### Defined in

[convert/routes.ts:28](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/convert/routes.ts#L28)

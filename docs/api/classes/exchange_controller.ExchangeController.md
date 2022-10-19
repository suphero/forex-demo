[forex-demo](../README.md) / [Modules](../modules.md) / [exchange/controller](../modules/exchange_controller.md) / ExchangeController

# Class: ExchangeController

[exchange/controller](../modules/exchange_controller.md).ExchangeController

Exchange Controller

## Table of contents

### Constructors

- [constructor](exchange_controller.ExchangeController.md#constructor)

### Properties

- [providerFactory](exchange_controller.ExchangeController.md#providerfactory)

### Methods

- [exchange](exchange_controller.ExchangeController.md#exchange)

## Constructors

### constructor

• **new ExchangeController**(`providerFactory`)

Exchange Controller Constructor

#### Parameters

| Name              | Type              |
| :---------------- | :---------------- |
| `providerFactory` | `ProviderFactory` |

#### Defined in

[exchange/controller.ts:12](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/controller.ts#L12)

## Properties

### providerFactory

• **providerFactory**: `ProviderFactory`

#### Defined in

[exchange/controller.ts:15](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/controller.ts#L15)

## Methods

### exchange

▸ **exchange**(`base`, `symbol`): `Promise`<`number`\>

Get Latest Exchange Rate

#### Parameters

| Name     | Type     | Description  |
| :------- | :------- | :----------- |
| `base`   | `string` | Base Symbol  |
| `symbol` | `string` | Quote Symbol |

#### Returns

`Promise`<`number`\>

#### Defined in

[exchange/controller.ts:23](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/exchange/controller.ts#L23)

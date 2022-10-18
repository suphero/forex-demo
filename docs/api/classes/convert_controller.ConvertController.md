[forex-demo](../README.md) / [Modules](../modules.md) / [convert/controller](../modules/convert_controller.md) / ConvertController

# Class: ConvertController

[convert/controller](../modules/convert_controller.md).ConvertController

Convert Controller

## Table of contents

### Constructors

- [constructor](convert_controller.ConvertController.md#constructor)

### Properties

- [providerFactory](convert_controller.ConvertController.md#providerfactory)
- [repositoryFactory](convert_controller.ConvertController.md#repositoryfactory)

### Methods

- [conversions](convert_controller.ConvertController.md#conversions)
- [convert](convert_controller.ConvertController.md#convert)

## Constructors

### constructor

• **new ConvertController**(`providerFactory`, `repositoryFactory`)

Convert Controller Constructor

#### Parameters

| Name                | Type                                                                                                                                                           |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `providerFactory`   | `ProviderFactory`                                                                                                                                              |
| `repositoryFactory` | `RepositoryFactory`<[`ITransaction`](../interfaces/convert_model.ITransaction.md), [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md)\> |

#### Defined in

[src/convert/controller.ts:16](https://github.com/suphero/forex-demo/blob/3cd49dc/src/convert/controller.ts#L16)

## Properties

### providerFactory

• **providerFactory**: `ProviderFactory`

#### Defined in

[src/convert/controller.ts:23](https://github.com/suphero/forex-demo/blob/3cd49dc/src/convert/controller.ts#L23)

---

### repositoryFactory

• **repositoryFactory**: `RepositoryFactory`<[`ITransaction`](../interfaces/convert_model.ITransaction.md), [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md)\>

#### Defined in

[src/convert/controller.ts:24](https://github.com/suphero/forex-demo/blob/3cd49dc/src/convert/controller.ts#L24)

## Methods

### conversions

▸ **conversions**(`filter`): [`ITransactionDto`](../interfaces/convert_model.ITransactionDto.md)[]

Get Filtered Transactions

#### Parameters

| Name     | Type                                                                      | Description       |
| :------- | :------------------------------------------------------------------------ | :---------------- |
| `filter` | [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md) | Conversion Filter |

#### Returns

[`ITransactionDto`](../interfaces/convert_model.ITransactionDto.md)[]

#### Defined in

[src/convert/controller.ts:31](https://github.com/suphero/forex-demo/blob/3cd49dc/src/convert/controller.ts#L31)

---

### convert

▸ **convert**(`fromCurrency`, `toCurrency`, `fromAmount`): `Promise`<[`ITransactionDto`](../interfaces/convert_model.ITransactionDto.md)\>

Convert currency

#### Parameters

| Name           | Type     | Description   |
| :------------- | :------- | :------------ |
| `fromCurrency` | `string` | From Currency |
| `toCurrency`   | `string` | To Currency   |
| `fromAmount`   | `number` | From Amount   |

#### Returns

`Promise`<[`ITransactionDto`](../interfaces/convert_model.ITransactionDto.md)\>

#### Defined in

[src/convert/controller.ts:49](https://github.com/suphero/forex-demo/blob/3cd49dc/src/convert/controller.ts#L49)

[forex-demo](../README.md) / [Modules](../modules.md) / [convert/controller](../modules/convert_controller.md) / ConvertController

# Class: ConvertController

[convert/controller](../modules/convert_controller.md).ConvertController

Convert Controller

## Table of contents

### Constructors

- [constructor](convert_controller.ConvertController.md#constructor)

### Properties

- [filterer](convert_controller.ConvertController.md#filterer)
- [providerFactory](convert_controller.ConvertController.md#providerfactory)
- [repositoryFactory](convert_controller.ConvertController.md#repositoryfactory)

### Methods

- [conversions](convert_controller.ConvertController.md#conversions)
- [convert](convert_controller.ConvertController.md#convert)

## Constructors

### constructor

• **new ConvertController**(`providerFactory`, `repositoryFactory`, `filterer`)

Convert Controller Constructor

#### Parameters

| Name                | Type                                                                                                                                                           |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `providerFactory`   | `ProviderFactory`                                                                                                                                              |
| `repositoryFactory` | `RepositoryFactory`<[`ITransaction`](../interfaces/convert_model.ITransaction.md), [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md)\> |
| `filterer`          | [`ConvertFilterer`](convert_filterer.ConvertFilterer.md)                                                                                                       |

#### Defined in

[src/convert/controller.ts:16](https://github.com/suphero/forex-demo/blob/a1f2b6b/src/convert/controller.ts#L16)

## Properties

### filterer

• **filterer**: [`ConvertFilterer`](convert_filterer.ConvertFilterer.md)

#### Defined in

[src/convert/controller.ts:27](https://github.com/suphero/forex-demo/blob/a1f2b6b/src/convert/controller.ts#L27)

---

### providerFactory

• **providerFactory**: `ProviderFactory`

#### Defined in

[src/convert/controller.ts:25](https://github.com/suphero/forex-demo/blob/a1f2b6b/src/convert/controller.ts#L25)

---

### repositoryFactory

• **repositoryFactory**: `RepositoryFactory`<[`ITransaction`](../interfaces/convert_model.ITransaction.md), [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md)\>

#### Defined in

[src/convert/controller.ts:26](https://github.com/suphero/forex-demo/blob/a1f2b6b/src/convert/controller.ts#L26)

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

[src/convert/controller.ts:34](https://github.com/suphero/forex-demo/blob/a1f2b6b/src/convert/controller.ts#L34)

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

[src/convert/controller.ts:51](https://github.com/suphero/forex-demo/blob/a1f2b6b/src/convert/controller.ts#L51)

[forex-demo](../README.md) / [Exports](../modules.md) / [convert/controller](../modules/convert_controller.md) / ConvertController

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

- [createConversion](convert_controller.ConvertController.md#createconversion)
- [findConversions](convert_controller.ConvertController.md#findconversions)

## Constructors

### constructor

• **new ConvertController**(`providerFactory`, `repositoryFactory`, `filterer`)

Convert Controller Constructor

#### Parameters

| Name                | Type                                                                                                                                                                                                          |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `providerFactory`   | [`ProviderFactory`](lib_provider_factory.ProviderFactory.md)                                                                                                                                                  |
| `repositoryFactory` | [`RepositoryFactory`](lib_repository_factory.RepositoryFactory.md)<[`ITransaction`](../interfaces/convert_model.ITransaction.md), [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md)\> |
| `filterer`          | [`ConvertFilterer`](convert_filterer.ConvertFilterer.md)                                                                                                                                                      |

#### Defined in

[src/convert/controller.ts:16](https://github.com/suphero/forex-demo/blob/14e963f/src/convert/controller.ts#L16)

## Properties

### filterer

• **filterer**: [`ConvertFilterer`](convert_filterer.ConvertFilterer.md)

#### Defined in

[src/convert/controller.ts:27](https://github.com/suphero/forex-demo/blob/14e963f/src/convert/controller.ts#L27)

---

### providerFactory

• **providerFactory**: [`ProviderFactory`](lib_provider_factory.ProviderFactory.md)

#### Defined in

[src/convert/controller.ts:25](https://github.com/suphero/forex-demo/blob/14e963f/src/convert/controller.ts#L25)

---

### repositoryFactory

• **repositoryFactory**: [`RepositoryFactory`](lib_repository_factory.RepositoryFactory.md)<[`ITransaction`](../interfaces/convert_model.ITransaction.md), [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md)\>

#### Defined in

[src/convert/controller.ts:26](https://github.com/suphero/forex-demo/blob/14e963f/src/convert/controller.ts#L26)

## Methods

### createConversion

▸ **createConversion**(`fromCurrency`, `toCurrency`, `fromAmount`): `Promise`<[`ITransactionDto`](../interfaces/convert_model.ITransactionDto.md)\>

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

[src/convert/controller.ts:51](https://github.com/suphero/forex-demo/blob/14e963f/src/convert/controller.ts#L51)

---

### findConversions

▸ **findConversions**(`filter`): [`ITransactionDto`](../interfaces/convert_model.ITransactionDto.md)[]

Get Filtered Transactions

#### Parameters

| Name     | Type                                                                      | Description       |
| :------- | :------------------------------------------------------------------------ | :---------------- |
| `filter` | [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md) | Conversion Filter |

#### Returns

[`ITransactionDto`](../interfaces/convert_model.ITransactionDto.md)[]

#### Defined in

[src/convert/controller.ts:34](https://github.com/suphero/forex-demo/blob/14e963f/src/convert/controller.ts#L34)

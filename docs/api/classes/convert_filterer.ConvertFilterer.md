[forex-demo](../README.md) / [Modules](../modules.md) / [convert/filterer](../modules/convert_filterer.md) / ConvertFilterer

# Class: ConvertFilterer

[convert/filterer](../modules/convert_filterer.md).ConvertFilterer

Filterer Base

## Hierarchy

- [`FiltererBase`](lib_filterer.FiltererBase.md)<[`ITransaction`](../interfaces/convert_model.ITransaction.md), [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md)\>

  ↳ **`ConvertFilterer`**

## Table of contents

### Constructors

- [constructor](convert_filterer.ConvertFilterer.md#constructor)

### Methods

- [filter](convert_filterer.ConvertFilterer.md#filter)

## Constructors

### constructor

• **new ConvertFilterer**()

#### Inherited from

[FiltererBase](lib_filterer.FiltererBase.md).[constructor](lib_filterer.FiltererBase.md#constructor)

## Methods

### filter

▸ **filter**(`datum`, `filter`): [`ITransaction`](../interfaces/convert_model.ITransaction.md)[]

#### Parameters

| Name     | Type                                                                      |
| :------- | :------------------------------------------------------------------------ |
| `datum`  | [`ITransaction`](../interfaces/convert_model.ITransaction.md)[]           |
| `filter` | [`ITransactionFilter`](../interfaces/convert_model.ITransactionFilter.md) |

#### Returns

[`ITransaction`](../interfaces/convert_model.ITransaction.md)[]

#### Overrides

[FiltererBase](lib_filterer.FiltererBase.md).[filter](lib_filterer.FiltererBase.md#filter)

#### Defined in

[src/convert/filterer.ts:11](https://github.com/suphero/forex-demo/blob/1257222/src/convert/filterer.ts#L11)

[forex-demo](../README.md) / [Modules](../modules.md) / [lib/filterer](../modules/lib_filterer.md) / FiltererBase

# Class: FiltererBase<T, TFilter\>

[lib/filterer](../modules/lib_filterer.md).FiltererBase

Filterer Base

## Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

## Hierarchy

- **`FiltererBase`**

  ↳ [`ConvertFilterer`](convert_filterer.ConvertFilterer.md)

## Table of contents

### Constructors

- [constructor](lib_filterer.FiltererBase.md#constructor)

### Methods

- [filter](lib_filterer.FiltererBase.md#filter)

## Constructors

### constructor

• **new FiltererBase**<`T`, `TFilter`\>()

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

## Methods

### filter

▸ `Abstract` **filter**(`datum`, `filter`): `T`[]

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `datum`  | `T`[]     |
| `filter` | `TFilter` |

#### Returns

`T`[]

#### Defined in

[lib/filterer.ts:7](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/lib/filterer.ts#L7)

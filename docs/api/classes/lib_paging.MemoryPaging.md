[forex-demo](../README.md) / [Modules](../modules.md) / [lib/paging](../modules/lib_paging.md) / MemoryPaging

# Class: MemoryPaging<T\>

[lib/paging](../modules/lib_paging.md).MemoryPaging

Memory Paging
This class is specifically named as memory, since the paging operation is done in-memory. Some Repository types may not need this type of class.

## Type parameters

| Name |
| :--- |
| `T`  |

## Table of contents

### Constructors

- [constructor](lib_paging.MemoryPaging.md#constructor)

### Methods

- [page](lib_paging.MemoryPaging.md#page)

## Constructors

### constructor

• **new MemoryPaging**<`T`\>()

#### Type parameters

| Name |
| :--- |
| `T`  |

## Methods

### page

▸ **page**(`data`, `filter`): `T`[]

Get Paged Data

#### Parameters

| Name     | Type                                                    | Description      |
| :------- | :------------------------------------------------------ | :--------------- |
| `data`   | `T`[]                                                   | Input data array |
| `filter` | [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) | Filter           |

#### Returns

`T`[]

Paged data

#### Defined in

[lib/paging.ts:16](https://github.com/suphero/forex-demo/blob/4b7f9d5/src/lib/paging.ts#L16)

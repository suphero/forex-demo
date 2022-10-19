[forex-demo](../README.md) / [Exports](../modules.md) / [lib/repository/base](../modules/lib_repository_base.md) / BaseRepository

# Class: BaseRepository<T, TFilter\>

[lib/repository/base](../modules/lib_repository_base.md).BaseRepository

Base Repository

## Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

## Hierarchy

- **`BaseRepository`**

  ↳ [`JsonRepository`](lib_repository_json.JsonRepository.md)

  ↳ [`MemoryRepository`](lib_repository_memory.MemoryRepository.md)

## Table of contents

### Constructors

- [constructor](lib_repository_base.BaseRepository.md#constructor)

### Methods

- [add](lib_repository_base.BaseRepository.md#add)
- [find](lib_repository_base.BaseRepository.md#find)

## Constructors

### constructor

• **new BaseRepository**<`T`, `TFilter`\>()

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

## Methods

### add

▸ `Abstract` **add**(`data`): `T`

Add Data

#### Parameters

| Name   | Type | Description |
| :----- | :--- | :---------- |
| `data` | `T`  | Data to add |

#### Returns

`T`

#### Defined in

[src/lib/repository/base.ts:11](https://github.com/suphero/forex-demo/blob/2d16766/src/lib/repository/base.ts#L11)

---

### find

▸ `Abstract` **find**(`filter`): `T`[]

Filter Data

#### Parameters

| Name     | Type      | Description |
| :------- | :-------- | :---------- |
| `filter` | `TFilter` | Data Filter |

#### Returns

`T`[]

#### Defined in

[src/lib/repository/base.ts:16](https://github.com/suphero/forex-demo/blob/2d16766/src/lib/repository/base.ts#L16)

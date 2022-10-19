[forex-demo](../README.md) / [Exports](../modules.md) / [lib/repository/memory](../modules/lib_repository_memory.md) / MemoryRepository

# Class: MemoryRepository<T, TFilter\>

[lib/repository/memory](../modules/lib_repository_memory.md).MemoryRepository

Memory Repository

## Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

## Hierarchy

- [`BaseRepository`](lib_repository_base.BaseRepository.md)<`T`, `TFilter`\>

  ↳ **`MemoryRepository`**

## Table of contents

### Constructors

- [constructor](lib_repository_memory.MemoryRepository.md#constructor)

### Properties

- [datum](lib_repository_memory.MemoryRepository.md#datum)
- [filterer](lib_repository_memory.MemoryRepository.md#filterer)
- [paging](lib_repository_memory.MemoryRepository.md#paging)

### Methods

- [add](lib_repository_memory.MemoryRepository.md#add)
- [find](lib_repository_memory.MemoryRepository.md#find)

## Constructors

### constructor

• **new MemoryRepository**<`T`, `TFilter`\>(`paging`, `filterer`)

Memory Repository Constructor

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

#### Parameters

| Name       | Type                                                            | Description |
| :--------- | :-------------------------------------------------------------- | :---------- |
| `paging`   | [`MemoryPaging`](lib_paging.MemoryPaging.md)<`T`\>              | Paging      |
| `filterer` | [`FiltererBase`](lib_filterer.FiltererBase.md)<`T`, `TFilter`\> | Filterer    |

#### Overrides

[BaseRepository](lib_repository_base.BaseRepository.md).[constructor](lib_repository_base.BaseRepository.md#constructor)

#### Defined in

[src/lib/repository/memory.ts:18](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/memory.ts#L18)

## Properties

### datum

• **datum**: `T`[] = `[]`

#### Defined in

[src/lib/repository/memory.ts:23](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/memory.ts#L23)

---

### filterer

• **filterer**: [`FiltererBase`](lib_filterer.FiltererBase.md)<`T`, `TFilter`\>

#### Defined in

[src/lib/repository/memory.ts:25](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/memory.ts#L25)

---

### paging

• **paging**: [`MemoryPaging`](lib_paging.MemoryPaging.md)<`T`\>

#### Defined in

[src/lib/repository/memory.ts:24](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/memory.ts#L24)

## Methods

### add

▸ **add**(`data`): `T`

Add Data

#### Parameters

| Name   | Type | Description |
| :----- | :--- | :---------- |
| `data` | `T`  | Data to add |

#### Returns

`T`

#### Overrides

[BaseRepository](lib_repository_base.BaseRepository.md).[add](lib_repository_base.BaseRepository.md#add)

#### Defined in

[src/lib/repository/memory.ts:31](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/memory.ts#L31)

---

### find

▸ **find**(`filter`): `T`[]

Filter Data

#### Parameters

| Name     | Type      | Description |
| :------- | :-------- | :---------- |
| `filter` | `TFilter` | Data Filter |

#### Returns

`T`[]

#### Overrides

[BaseRepository](lib_repository_base.BaseRepository.md).[find](lib_repository_base.BaseRepository.md#find)

#### Defined in

[src/lib/repository/memory.ts:40](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/memory.ts#L40)

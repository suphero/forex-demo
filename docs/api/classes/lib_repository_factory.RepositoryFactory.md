[forex-demo](../README.md) / [Exports](../modules.md) / [lib/repository/factory](../modules/lib_repository_factory.md) / RepositoryFactory

# Class: RepositoryFactory<T, TFilter\>

[lib/repository/factory](../modules/lib_repository_factory.md).RepositoryFactory

Repository Factory

## Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

## Table of contents

### Constructors

- [constructor](lib_repository_factory.RepositoryFactory.md#constructor)

### Properties

- [paging](lib_repository_factory.RepositoryFactory.md#paging)

### Methods

- [createRepository](lib_repository_factory.RepositoryFactory.md#createrepository)

## Constructors

### constructor

• **new RepositoryFactory**<`T`, `TFilter`\>(`paging`)

Repository Factory Constructor

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

#### Parameters

| Name     | Type                                               |
| :------- | :------------------------------------------------- |
| `paging` | [`MemoryPaging`](lib_paging.MemoryPaging.md)<`T`\> |

#### Defined in

[src/lib/repository/factory.ts:17](https://github.com/suphero/forex-demo/blob/e73074c/src/lib/repository/factory.ts#L17)

## Properties

### paging

• **paging**: [`MemoryPaging`](lib_paging.MemoryPaging.md)<`T`\>

#### Defined in

[src/lib/repository/factory.ts:20](https://github.com/suphero/forex-demo/blob/e73074c/src/lib/repository/factory.ts#L20)

## Methods

### createRepository

▸ **createRepository**(`filterer`): [`BaseRepository`](lib_repository_base.BaseRepository.md)<`T`, `TFilter`\>

Create Repository

#### Parameters

| Name       | Type                                                            |
| :--------- | :-------------------------------------------------------------- |
| `filterer` | [`FiltererBase`](lib_filterer.FiltererBase.md)<`T`, `TFilter`\> |

#### Returns

[`BaseRepository`](lib_repository_base.BaseRepository.md)<`T`, `TFilter`\>

#### Defined in

[src/lib/repository/factory.ts:26](https://github.com/suphero/forex-demo/blob/e73074c/src/lib/repository/factory.ts#L26)

[forex-demo](../README.md) / [Exports](../modules.md) / [lib/repository/json](../modules/lib_repository_json.md) / JsonRepository

# Class: JsonRepository<T, TFilter\>

[lib/repository/json](../modules/lib_repository_json.md).JsonRepository

Json Repository

## Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TFilter` | extends [`IFilterBase`](../interfaces/lib_model.IFilterBase.md) |

## Hierarchy

- [`BaseRepository`](lib_repository_base.BaseRepository.md)<`T`, `TFilter`\>

  ↳ **`JsonRepository`**

## Table of contents

### Constructors

- [constructor](lib_repository_json.JsonRepository.md#constructor)

### Properties

- [filePath](lib_repository_json.JsonRepository.md#filepath)
- [filterer](lib_repository_json.JsonRepository.md#filterer)
- [paging](lib_repository_json.JsonRepository.md#paging)

### Methods

- [add](lib_repository_json.JsonRepository.md#add)
- [find](lib_repository_json.JsonRepository.md#find)
- [folderName](lib_repository_json.JsonRepository.md#foldername)
- [readFile](lib_repository_json.JsonRepository.md#readfile)
- [writeFile](lib_repository_json.JsonRepository.md#writefile)

## Constructors

### constructor

• **new JsonRepository**<`T`, `TFilter`\>(`paging`, `filterer`, `filePath`)

Json Repository Constructor

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
| `filePath` | `string`                                                        | -           |

#### Overrides

[BaseRepository](lib_repository_base.BaseRepository.md).[constructor](lib_repository_base.BaseRepository.md#constructor)

#### Defined in

[src/lib/repository/json.ts:21](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L21)

## Properties

### filePath

• **filePath**: `string`

#### Defined in

[src/lib/repository/json.ts:36](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L36)

---

### filterer

• **filterer**: [`FiltererBase`](lib_filterer.FiltererBase.md)<`T`, `TFilter`\>

#### Defined in

[src/lib/repository/json.ts:35](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L35)

---

### paging

• **paging**: [`MemoryPaging`](lib_paging.MemoryPaging.md)<`T`\>

#### Defined in

[src/lib/repository/json.ts:34](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L34)

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

[src/lib/repository/json.ts:77](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L77)

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

[src/lib/repository/json.ts:88](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L88)

---

### folderName

▸ **folderName**(): `string`

Get Folder of the File Path

#### Returns

`string`

Parent Folder

#### Defined in

[src/lib/repository/json.ts:42](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L42)

---

### readFile

▸ **readFile**(): `T`[]

Get File Content

#### Returns

`T`[]

Read File Content

#### Defined in

[src/lib/repository/json.ts:50](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L50)

---

### writeFile

▸ **writeFile**(`datum`): `void`

Write Content to File

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `datum` | `T`[] | Content of the File |

#### Returns

`void`

#### Defined in

[src/lib/repository/json.ts:64](https://github.com/suphero/forex-demo/blob/14e963f/src/lib/repository/json.ts#L64)

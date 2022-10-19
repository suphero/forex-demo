[forex-demo](../README.md) / [Exports](../modules.md) / [lib/provider/fixer](../modules/lib_provider_fixer.md) / FixerProvider

# Class: FixerProvider

[lib/provider/fixer](../modules/lib_provider_fixer.md).FixerProvider

fixer.io provider

## Hierarchy

- [`BaseProvider`](lib_provider_base.BaseProvider.md)

  ↳ **`FixerProvider`**

## Table of contents

### Constructors

- [constructor](lib_provider_fixer.FixerProvider.md#constructor)

### Properties

- [apiKey](lib_provider_fixer.FixerProvider.md#apikey)
- [baseUrl](lib_provider_fixer.FixerProvider.md#baseurl)

### Methods

- [convert](lib_provider_fixer.FixerProvider.md#convert)
- [latest](lib_provider_fixer.FixerProvider.md#latest)

## Constructors

### constructor

• **new FixerProvider**(`apiKey`)

Constructor

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `apiKey` | `string` |

#### Overrides

[BaseProvider](lib_provider_base.BaseProvider.md).[constructor](lib_provider_base.BaseProvider.md#constructor)

#### Defined in

[src/lib/provider/fixer.ts:14](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/fixer.ts#L14)

## Properties

### apiKey

• **apiKey**: `string`

#### Defined in

[src/lib/provider/fixer.ts:22](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/fixer.ts#L22)

---

### baseUrl

• **baseUrl**: `string` = `FixerApiBaseUrl`

#### Defined in

[src/lib/provider/fixer.ts:23](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/fixer.ts#L23)

## Methods

### convert

▸ **convert**(`from`, `to`, `amount`): `Promise`<`any`\>

Convert exchange

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `from`   | `string` | symbol      |
| `to`     | `string` | symbol      |
| `amount` | `number` |             |

#### Returns

`Promise`<`any`\>

#### Overrides

[BaseProvider](lib_provider_base.BaseProvider.md).[convert](lib_provider_base.BaseProvider.md#convert)

#### Defined in

[src/lib/provider/fixer.ts:48](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/fixer.ts#L48)

---

### latest

▸ **latest**(`base`, `symbol`): `Promise`<`any`\>

Get Latest Exchange Rate

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `base`   | `string` | symbol      |
| `symbol` | `string` |             |

#### Returns

`Promise`<`any`\>

#### Overrides

[BaseProvider](lib_provider_base.BaseProvider.md).[latest](lib_provider_base.BaseProvider.md#latest)

#### Defined in

[src/lib/provider/fixer.ts:31](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/fixer.ts#L31)

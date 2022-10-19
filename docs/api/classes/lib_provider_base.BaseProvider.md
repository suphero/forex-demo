[forex-demo](../README.md) / [Exports](../modules.md) / [lib/provider/base](../modules/lib_provider_base.md) / BaseProvider

# Class: BaseProvider

[lib/provider/base](../modules/lib_provider_base.md).BaseProvider

Exchange Rate Base Provider

## Hierarchy

- **`BaseProvider`**

  ↳ [`ExchangeRatesProvider`](lib_provider_exchange_rates.ExchangeRatesProvider.md)

  ↳ [`FixerProvider`](lib_provider_fixer.FixerProvider.md)

## Table of contents

### Constructors

- [constructor](lib_provider_base.BaseProvider.md#constructor)

### Methods

- [convert](lib_provider_base.BaseProvider.md#convert)
- [latest](lib_provider_base.BaseProvider.md#latest)

## Constructors

### constructor

• **new BaseProvider**()

## Methods

### convert

▸ `Abstract` **convert**(`from`, `to`, `amount`): `Promise`<`number`\>

Convert exchange

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `from`   | `string` | symbol      |
| `to`     | `string` | symbol      |
| `amount` | `number` |             |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/lib/provider/base.ts:19](https://github.com/suphero/forex-demo/blob/e73074c/src/lib/provider/base.ts#L19)

---

### latest

▸ `Abstract` **latest**(`base`, `symbol`): `Promise`<`number`\>

Get Latest Exchange Rate

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `base`   | `string` | symbol      |
| `symbol` | `string` |             |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/lib/provider/base.ts:11](https://github.com/suphero/forex-demo/blob/e73074c/src/lib/provider/base.ts#L11)

[forex-demo](../README.md) / [Exports](../modules.md) / [lib/provider/exchange-rates](../modules/lib_provider_exchange_rates.md) / ExchangeRatesProvider

# Class: ExchangeRatesProvider

[lib/provider/exchange-rates](../modules/lib_provider_exchange_rates.md).ExchangeRatesProvider

exchangeratesapi.io provider

## Hierarchy

- [`BaseProvider`](lib_provider_base.BaseProvider.md)

  ↳ **`ExchangeRatesProvider`**

## Table of contents

### Constructors

- [constructor](lib_provider_exchange_rates.ExchangeRatesProvider.md#constructor)

### Properties

- [apiKey](lib_provider_exchange_rates.ExchangeRatesProvider.md#apikey)
- [baseUrl](lib_provider_exchange_rates.ExchangeRatesProvider.md#baseurl)
- [isPremium](lib_provider_exchange_rates.ExchangeRatesProvider.md#ispremium)

### Methods

- [convert](lib_provider_exchange_rates.ExchangeRatesProvider.md#convert)
- [convertFree](lib_provider_exchange_rates.ExchangeRatesProvider.md#convertfree)
- [convertPremium](lib_provider_exchange_rates.ExchangeRatesProvider.md#convertpremium)
- [latest](lib_provider_exchange_rates.ExchangeRatesProvider.md#latest)

## Constructors

### constructor

• **new ExchangeRatesProvider**(`apiKey`, `isPremium`)

Constructor

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `apiKey`    | `string`  |
| `isPremium` | `boolean` |

#### Overrides

[BaseProvider](lib_provider_base.BaseProvider.md).[constructor](lib_provider_base.BaseProvider.md#constructor)

#### Defined in

[src/lib/provider/exchange-rates.ts:18](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L18)

## Properties

### apiKey

• **apiKey**: `string`

#### Defined in

[src/lib/provider/exchange-rates.ts:32](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L32)

---

### baseUrl

• **baseUrl**: `string`

#### Defined in

[src/lib/provider/exchange-rates.ts:34](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L34)

---

### isPremium

• **isPremium**: `boolean`

#### Defined in

[src/lib/provider/exchange-rates.ts:33](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L33)

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

[src/lib/provider/exchange-rates.ts:58](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L58)

---

### convertFree

▸ **convertFree**(`from`, `to`, `amount`): `Promise`<`number`\>

Convert exchange via latest endpoint

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `from`   | `string` | symbol      |
| `to`     | `string` | symbol      |
| `amount` | `number` |             |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/lib/provider/exchange-rates.ts:90](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L90)

---

### convertPremium

▸ **convertPremium**(`from`, `to`, `amount`): `Promise`<`any`\>

Convert exchange via API. Free version doesn't support this endpoint

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `from`   | `string` | symbol      |
| `to`     | `string` | symbol      |
| `amount` | `number` |             |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/provider/exchange-rates.ts:73](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L73)

---

### latest

▸ **latest**(`base`, `symbol`): `Promise`<`number`\>

Get Latest Exchange Rate

#### Parameters

| Name     | Type     | Description |
| :------- | :------- | :---------- |
| `base`   | `string` | symbol      |
| `symbol` | `string` |             |

#### Returns

`Promise`<`number`\>

#### Overrides

[BaseProvider](lib_provider_base.BaseProvider.md).[latest](lib_provider_base.BaseProvider.md#latest)

#### Defined in

[src/lib/provider/exchange-rates.ts:42](https://github.com/suphero/forex-demo/blob/2ac0f42/src/lib/provider/exchange-rates.ts#L42)

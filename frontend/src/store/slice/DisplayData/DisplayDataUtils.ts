import { DATA_TYPE, DATA_TYPE_SET } from './DisplayDataType'

/**
 * サーバーサイドの値をマッピング
 */
export function toDataType(value: string): DATA_TYPE {
  switch (value) {
    case 'images':
      return DATA_TYPE_SET.IMAGE
    case 'timeseries':
      return DATA_TYPE_SET.TIME_SERIES
    case 'heatmap':
      return DATA_TYPE_SET.HEAT_MAP
    default:
      throw new Error(`failed to map dataType: ${value}`)
  }
}
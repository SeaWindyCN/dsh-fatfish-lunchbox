/**
 * dsh-feiyu-lunchbox —— 宿主半区。
 *
 * 这个插件没有宿主侧服务：货架、素材、选货、投喂全部在浏览器里完成
 * （client.js）。这里只提供一个空插件，让 bundle 在 profile 里有一行宿主条目。
 */

export const name = 'dsh-feiyu-lunchbox'

export function apply() {
  /* 客户端半区承担全部功能。 */
}

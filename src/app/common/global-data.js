const globalData = {}

export function set(key, val) {
  globalData[key] = val
}

export function get(key) {
  return globalData[key]
}

export function remove(key) {
  delete globalData[key]
}

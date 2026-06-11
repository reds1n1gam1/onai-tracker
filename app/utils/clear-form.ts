export default function clearAllKeys(state: Record<string, unknown>) {
  Object.keys(state).forEach(key => delete state[key])
}
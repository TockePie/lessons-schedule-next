export function parseCookie(value?: string): string[] {
  if (!value) return []
  try {
    return JSON.parse(value)
  } catch {
    return []
  }
}

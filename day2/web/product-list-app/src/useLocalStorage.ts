export function useLocalStorage() {
  const items = localStorage.getItem("items");
  return items ? JSON.parse(items) : [];
}

import { ref, computed } from "vue";

export function useFilterSearch(users) {
  const filterInput = ref("");

  const filteredSearch = computed(() => {
    if (!users.value) return [];
    const search = filterInput.value.toLowerCase();
    return users.value.filter(
      (user) =>
        (user.name && user.name.toLocaleLowerCase().includes(search)) ||
        (user.email && user.email.toLocaleLowerCase().includes(search))
    );
  });

  return { filteredSearch, filterInput };
}

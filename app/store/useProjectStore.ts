export const useProjectsStore = defineStore("projects", {
  state: () => ({ projects: [] as Project[] }),
  getters: {
    getProjects: (state) => state.projects,
  },
  actions: {
    async fetchAllProjects() {
      const allProjects: Project[] = await $fetch("/api/projects", {
        method: "GET",
      });

      this.projects = allProjects;
    },
  },
});

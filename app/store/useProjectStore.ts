export const useProjectsStore = defineStore("projects", {
  state: () => ({ projects: [] as Project[] }),
  getters: {
    getProjects: (state) => state.projects,
  },
  actions: {
    storeTasks(projects: Project[]) {
      this.projects = projects;
    },
  },
});

export interface Project {
  id: string;
  userId: string;

  name: string;
  color?: string;
  description?: string;

  user: User;
  tasks: Task[];

  createdAt: Date;
  updatedAt: Date;
}

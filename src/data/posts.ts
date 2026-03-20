export type Post = {
  id: string;
  title: string;
  body: string;
  author: string;
  createdAt: string;
};

export const IN_MEMORY_POSTS: ReadonlyArray<Post> = [
  {
    id: "p1",
    title: "Welcome To The Community",
    body: "This feed is loaded from an in-memory array. You can replace it with API data later.",
    author: "Admin",
    createdAt: "2026-03-20 08:30",
  },
  {
    id: "p2",
    title: "React Native Tips",
    body: "Use FlatList for scalable rendering and keep form validation logic in reusable utilities.",
    author: "Tech Writer",
    createdAt: "2026-03-20 09:10",
  },
  {
    id: "p3",
    title: "Security Reminder",
    body: "Always trim input, validate email format, enforce password complexity, and limit retry attempts.",
    author: "Security Bot",
    createdAt: "2026-03-20 10:00",
  },
  {
    id: "p4",
    title: "Roadmap",
    body: "Next step: connect this screen to a backend endpoint and paginate posts.",
    author: "Product Team",
    createdAt: "2026-03-20 11:45",
  },
];

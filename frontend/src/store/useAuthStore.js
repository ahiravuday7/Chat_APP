import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://example.com/john-doe.jpg",
    bio: "Software Developer",
    username: "johndoe",
  },
  isLoading: false,
  isLoggedIn: false,
  login: () => {
    console.log("login");
    set({ isLoggedIn: true, isLoading: true });
  },
}));

export interface TestUser {
  id: string;
  email: string;
  name: string;
  age_range?: string;
  created_at: string;
}

export const testUsers: Record<string, TestUser> = {
  user1: {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    email: "john@example.com",
    name: "John Smith",
    age_range: "60-70",
    created_at: "2026-01-01T00:00:00Z",
  },
  user2: {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    email: "jane@example.com",
    name: "Jane Doe",
    age_range: "70-80",
    created_at: "2026-01-05T00:00:00Z",
  },
  admin: {
    id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    email: "admin@teksure.com",
    name: "Admin User",
    created_at: "2025-01-01T00:00:00Z",
  },
};

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface PlayerProfile {
  name: string;
  username: string;
  phone: string;
  level: string;
  joinedAt: string;
  profileImage: string | null;
}

export interface ProfileFormData {
  name: string;
  username: string;
}

export interface ProfileFormErrors {
  name: string;
  username: string;
}

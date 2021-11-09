export interface GhUserApiResponse {
  login: string;
  id: number;
  node_id: number;
  avatar_url: string | null;
  followers: number;
  following: number;
  bio: string | null;
  blog: string | null;
  html_url: string;
}

interface ProfileBase {
  ghUsername: string;
  role: string;
}

export interface LoadedProfile extends GhUserApiResponse, ProfileBase {
  isLoaded: true;
}

export interface UnLoadedProfile extends Partial<GhUserApiResponse>, ProfileBase {
  isLoaded: false;
}

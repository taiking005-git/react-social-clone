export interface PostData {
  _id: number;
  photo: string;
  desc: string;
  date: string;
  userId: number;
  likes: number[];
  shares: number[];
  commentCount: number;
}
export interface PostProps {
  post: PostData;
}
export interface PostsProps {
  postDatas: PostData[];
}
export interface StoryData {
  _id: number;
  userId: number;
  storyImg: string;
}

export interface StoriesProps {
  storiesData: StoryData[];
}

export interface UserData {
  userId: number;
  userName: string;
  userImg: string;
  tag: string;
  friends: number[];
  isOnline: boolean;
}

export interface UserProps {
  user: UserData;
}

export interface UsersProps {
  usersData: UserData[];
}

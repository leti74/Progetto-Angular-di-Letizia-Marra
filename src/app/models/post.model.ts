import { UserComment } from "./comment.model";

export interface Post {
    id: number;
    user_id: number;  
    title: string;
    body: string;
    comments?: UserComment[]; 
    userName?: string
  }
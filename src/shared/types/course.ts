import { Assignment } from "./assignments";

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: number;
  price: number;
  rating: number;
  imageUrl: string;
  category: string;
  modules: Module[];
}

export interface Module {
  id: number;
  title: string;
  duration: number;
  description: string;
  content: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  title: string;
  duration: number;
  description: string;
  videoUrl: string;
  documentUrl: string;
  assignments: Assignment[];
}

// types.d.ts
declare module "my-types" {
  export type Workout = {
    id: number;
    name: string;
    createdDate: string;
    lastDoneDate: string;
    durationMinutes: number;
    notes: string;
    sets: Set[];
    musclesTargeted: Muscle[];
    tags: string[];
  };

  export type Set = {
    id: number;
    exercise: Exercise;
    name: string;
    sets: number;
    reps: number;
    restSeconds: number;
  };

  export type Muscle = {
    id: number;
    name: string;
  };

  export type Exercise = {
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    id: number;
    name: string;
    target: string;
  };
}

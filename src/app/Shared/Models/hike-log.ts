import { Path } from "./path";

export interface HikeLog {
    readonly id: number,
    trailId: number,
    date: string,
    minutes: number,
    notes?: string,
}

// Intersection type -> A trail and how many times its been hiked
export type LoggedTrail = Path & { timesHiked: number };
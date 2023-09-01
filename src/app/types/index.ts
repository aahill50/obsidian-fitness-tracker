export enum EQUIPMENT {
    BODY_WEIGHT = 'Body Weight',
    PRESS_BENCH = 'Bench Press Bench',
    SQUAT_RACK = 'Squat Rack',
    DUMB_BELL = 'Dumbbells',
    KETTLE_BELL = 'Kettle Bells',
    BAND = 'Exercise Bands',
}

export enum UNITS {
    LB = 'lb',
    KG = 'kg',
}

export interface Exercise {
    name: string;
    equipment: EQUIPMENT[];
    canSplit?: boolean;
    splitTerms?: string[];
}

interface UnitWithValue {
    unit: string;
    value: number;
}

export interface WorkoutRepType {
    duration?: UnitWithValue;
    distance?: UnitWithValue;
    reps?: number;
    full?: number;
    partial?: number;
    weight?: UnitWithValue;
}

export type WorkoutRepTypeKeys = keyof WorkoutRepType;

export interface WorkoutSet {
    timestamp: string;
    reps: WorkoutRepType[];
    notes?: string;
}

import clsx from 'clsx';
import { WorkoutRep } from './components/WorkoutRep';
import { Exercise, EQUIPMENT, UNITS, WorkoutSet } from '@types';
import { gridColumnsStyle } from '@utils';

const equipmentDisplayLabel = {
    [EQUIPMENT.BODY_WEIGHT]: null,
    [EQUIPMENT.PRESS_BENCH]: 'Weight',
    [EQUIPMENT.SQUAT_RACK]: 'Weight',
    [EQUIPMENT.DUMB_BELL]: 'Dumbbell',
    [EQUIPMENT.KETTLE_BELL]: 'Kettlebell',
    [EQUIPMENT.BAND]: 'Resistance Band',
};

const ex: Record<string, Exercise> = {
    'Push Ups': {
        name: 'Push Ups',
        equipment: [],
        canSplit: false,
    },
    'Bicep Curls': {
        name: 'Bicep Curls',
        equipment: [EQUIPMENT.DUMB_BELL, EQUIPMENT.KETTLE_BELL, EQUIPMENT.BAND],
        canSplit: true,
        splitTerms: ['L', 'R'],
    },
};

interface UserWorkoutTrackingData {
    name: string;
    equipment: EQUIPMENT;
    repTypes: string[];
    workouts: WorkoutSet[];
}

interface DB {
    exercises: Exercise[];
    user: {
        exercises: Exercise[];
        tracking: Record<string, UserWorkoutTrackingData>;
    };
}

const db: DB = {
    exercises: [ex['Push Ups'], ex['Sit Ups'], ex['Squats'], ex['Bicep Curls']],
    user: {
        exercises: [ex['Push Ups'], ex['Bicep Curls']],
        tracking: {
            'Push Ups': {
                name: 'Push Ups',
                equipment: EQUIPMENT.BODY_WEIGHT,
                repTypes: ['full', 'partial'],
                workouts: [
                    {
                        timestamp: '01/02/23 2:05pm',
                        reps: [
                            {
                                full: 20,
                                partial: 3,
                            },
                            {
                                full: 15,
                                partial: 1,
                            },
                            {
                                full: 8,
                                partial: 0,
                            },
                        ],
                    },
                    {
                        timestamp: '01/01/23 2:05pm',
                        reps: [
                            {
                                full: 20,
                                partial: 3,
                            },
                            {
                                full: 15,
                                partial: 1,
                            },
                            {
                                full: 8,
                                partial: 0,
                            },
                        ],
                        notes: 'First workout in a while! Felt good',
                    },
                ],
            },
            'Bicep Curls': {
                name: 'Bicep Curls',
                equipment: EQUIPMENT.DUMB_BELL,
                repTypes: ['full', 'partial', 'weight'],
                workouts: [
                    {
                        timestamp: '01/02/23 2:25pm',
                        reps: [
                            {
                                full: 15,
                                partial: 3,
                                weight: { unit: UNITS.LB, value: 55 },
                            },
                            {
                                full: 9,
                                partial: 5,
                                weight: { unit: UNITS.LB, value: 50 },
                            },
                            {
                                full: 6,
                                partial: 3,
                                weight: { unit: UNITS.LB, value: 45 },
                            },
                        ],
                        notes: 'Adding bicep curls today',
                    },
                ],
            },
        },
    },
};

export default function Tracker() {
    const userExercises = Object.values(db.user.tracking);

    return (
        <div className={clsx('grid', 'mx-12', 'mt-12')}>
            <div
                className={clsx(
                    'mb-4',
                    'font-bold',
                    'text-2xl',
                    'relative',
                    '-left-8',
                    'border-t-2',
                    'border-black',
                    'pt-6'
                )}
            >
                Track Exercise
            </div>
            <div
                className={clsx(
                    // 'grid',
                    // 'justify-around',
                    'mb-6'
                )}
            >
                <div className='text-center'>Add Exercise (dropdown)</div>
                <div className='text-center'>Equipment Used (dropdown)</div>
                <div className='text-center'>3</div>
            </div>
            {userExercises.map((e) => (
                <div className='mb-12'>
                    <div
                        className={clsx(
                            'mb-4',
                            'font-bold',
                            'text-2xl',
                            'relative',
                            '-left-8',
                            'border-t-2',
                            'border-black',
                            'pt-6'
                        )}
                    >
                        {e.name} ({e.equipment})
                    </div>
                    <div
                        className={clsx(
                            'grid',
                            'justify-around'
                        )}
                        style={{
                            ...gridColumnsStyle(e.repTypes.length),
                        }}
                    >
                        <div className='text-center'>Full Reps</div>
                        <div className='text-center'>Partial Reps</div>
                        {!equipmentDisplayLabel[e.equipment] ? null : (
                            <div className='text-center'>
                                {equipmentDisplayLabel[e.equipment]}
                            </div>
                        )}
                    </div>
                    <div className={clsx('grid', 'grid-flow-row')}>
                        {[...e.workouts].map((w) => (
                            <>
                                {w.reps.map((r) => (
                                    <WorkoutRep rep={r} />
                                ))}

                                {!w.notes ? null : (
                                    <div className={clsx('mt-6')}>
                                        <span className='font-bold'>
                                            Notes:{' '}
                                        </span>
                                        {w.notes}
                                    </div>
                                )}

                                <span
                                    className={clsx(
                                        'font-bold',
                                        // 'underline',
                                        'relative',
                                        // '-left-4',
                                        'mt-2',
                                        'mb-6',
                                        'first:mt-0'
                                    )}
                                >
                                    {w.timestamp}
                                </span>
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

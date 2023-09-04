# Schema Description

## User

id: string,
name: string
workouts: Workout[]

```js
{
    id: 'U_1',
    name: 'John Doe',
    workouts: [
        {
            exercise: {
                id: 'E_1'

            },
            reps: Rep[],
        }
    ]
}
```

## Workout

A collection of exercises with metadata attached
id: string
userId: string
exercises: Exercise[]
notes: string
timestamp: DateTime

```js
{
    id: "W_1",
    userId: "U_1",
    exercises: ["E_1"],
    notes: "Felt great!",
    timestamp: "01/02/23",
}
```

## Exercise

Tracks the reps of one exercise, done during a workout.
id: string
userId: string
name: string
reps: RepId[]

```js
const exercise = {
  id: "E_1",
  userId: "U_1",
  name: "Bicep Curls",
  reps: ["REP_1", "REP_2"],
};
```

## Rep

One rep of an exercise
id: string
unitId: unitId
unitType: UnitType
exercise: exerciseId
repAmount: number
unit: UnitId
unitAmount: number

```js
{

  exerciseId: "R_1",
  repAmount: "10",
  unit: "UNIT_1",
  unitAmount: "55",
}
```

## Unit

A unit used to measure the reps of an exercise. Will contain an enum of units (to be increased over time) that can be used for measurement. May need to be broken into measurements by "type" later, for example, distance, vs mass vs repetitions
id: string
name: string
shortName: string

```js
{
    id: "UNIT_1",
    name: "Pound",
    shortName: "lb"
}
```

## Enums

```js
enum UnitType {
    Distance
    Time
    Weight
    Unitless
}

enum DistanceRep {
    METER
    KILOMETER
    MILE
}

enum TimeRep {
    SECOND
    MINUTE
    HOUR
}

enum WeightRep {
    POUND
    KILOGRAM
}

enum UnitlessRep {
    REPETITION
}
```

<hr>
Add Exercises
<hr>
Bicep Curls
10 full 5 partial 55lb
9 full 4 partial 50lb
<hr>

import { WorkoutRepType, WorkoutRepTypeKeys } from '@types';
import { gridColumnsStyle } from '@utils';
import clsx from 'clsx';

const RepData = ({ data }: { data: WorkoutRepType[WorkoutRepTypeKeys] }) => {
    if (typeof data === 'undefined') {
        return null;
    }

    let content = '';

    if (typeof data === 'object') {
        content = `${data.value}${data.unit}`;
    } else {
        content = data.toString();
    }

    return (
        <div className={clsx('border-b', 'border-black', 'text-center')}>
            {content}
        </div>
    );
};

export const WorkoutRep = ({ rep }: { rep: WorkoutRepType }) => {
    const repTypes = Object.keys(rep) as WorkoutRepTypeKeys[];
    console.log('rep:', rep);

    return (
        <div
            className={clsx('grid')}
            style={{
                ...gridColumnsStyle(repTypes.length),
            }}
        >
            {repTypes.map((repType, i) => (
                <RepData key={i} data={rep[repType]} />
            ))}
        </div>
    );
};

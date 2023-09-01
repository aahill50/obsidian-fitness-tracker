import { WorkoutRepType, WorkoutRepTypeKeys } from '@types';
import { gridColumnsStyle } from '@utils';
import clsx from 'clsx';

const RepData = ({ data }: { data: WorkoutRepType }) => {
    const displayAsUnits = !!data.unit;
    const content = displayAsUnits ? `${data.value}${data.unit}` : data;
    return (
        <div className={clsx('border-b', 'border-black', 'text-center')}>
            {content}
        </div>
    );
};

export const WorkoutRep = ({ rep }: { rep: WorkoutRepType }) => {
    const repTypes: WorkoutRepTypeKeys[] = Object.keys(rep);
    console.log('rep:', rep);

    return (
        <div
            className={clsx('grid')}
            style={{
                ...gridColumnsStyle(repTypes.length),
            }}
        >
            {repTypes.map((repType) => {
                const thisRep = rep[repType];
                console.log('thisRep:', thisRep);
                if (thisRep === undefined) {
                    return null;
                }
                return <RepData data={thisRep} />;
            })}
        </div>
    );
};

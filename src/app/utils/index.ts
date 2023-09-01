export const gridColumnsStyle = (
    numColumns: number
): { gridTemplateColumns: string } => ({
    gridTemplateColumns: `repeat(${numColumns}, minmax(0, 1fr))`,
});

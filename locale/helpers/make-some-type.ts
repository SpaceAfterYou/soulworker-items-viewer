export const makeSomeType = <T extends number>({
  name,
  id,
}: {
  name: string;
  id: T;
}) => ({
  id: `${id}`,
  name,
});

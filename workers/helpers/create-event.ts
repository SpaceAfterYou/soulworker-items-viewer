import type { FetchItemsServiceEventParams } from "../types";

type CreateEventParams = FetchItemsServiceEventParams;

export const createEvent = ({ data, id }: CreateEventParams) => ({
  data,
  id,
});

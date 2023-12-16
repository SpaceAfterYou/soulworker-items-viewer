import type { ServiceEvent } from "./enums";

type ServiceEventParams<T> = {
  id: ServiceEvent;
  data?: T;
};

export type FetchItemsServiceEventParams = ServiceEventParams<void>;
export type PopulateItemsServiceEventParams = ServiceEventParams<void>;

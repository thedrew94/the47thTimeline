export interface TimelineElementInterface {
  date: string;
  content: Array<TimelineEventInterface>;
}

export interface TimelineEventInterface {
  date: string | null;
  location: string;
  weather: string;
  content: string;
  references: Array<ReferenceInterface>;
}

export interface ReferenceInterface {
  href: string;
  alias?: string;
}

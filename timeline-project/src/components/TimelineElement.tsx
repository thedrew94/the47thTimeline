import type { TimelineElementInterface } from "../types/interface";
import TimelineEvent from "./TimelineEvent";

interface Props extends TimelineElementInterface {}

export default function TimelineElement({ date = "January 9999", content = [] }: Props) {
  return (
    <li className="sticky_content">
      <div className="sticky_content_left">
        <h2>{date}</h2>
      </div>

      <ul className="content_ul">
        {content.map((c, idx) => {
          return <TimelineEvent key={`timeline_event_${idx}`} content={c} />;
        })}
      </ul>
    </li>
  );
}

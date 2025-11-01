import { useState } from "react";
import type { TimelineEventInterface } from "../types/interface";
import { svgSelector } from "../utils/svgSelector";

interface Props {
  content: TimelineEventInterface;
}

const notConfirmedValue = "N/C";
const svgSizeWidth = "16px";
const svgSizeHeight = "16px";

export default function TimelineEvent({ content }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const {
    date = notConfirmedValue,
    location = notConfirmedValue,
    weather = notConfirmedValue,
    content: eventContent,
    references,
  } = content;

  return (
    <li className="content_li">
      <div className="content_li_main">
        <div className="content_li_info">
          {svgSelector({ svgName: "calendar", svgWidth: svgSizeWidth, svgHeight: svgSizeHeight })}
          <p>{date || notConfirmedValue}</p>
          {svgSelector({ svgName: "earth", svgWidth: svgSizeWidth, svgHeight: svgSizeHeight })}
          <p>{location || notConfirmedValue}</p>
          {svgSelector({ svgName: "weather", svgWidth: svgSizeWidth, svgHeight: svgSizeHeight })}
          <p>{weather || notConfirmedValue}</p>
        </div>

        <h3>{eventContent}</h3>
        <ul className={`content_references ${expanded && "content_references_expanded"}`}>
          {references.map((r, idx) => {
            return (
              <li key={`event_reference_${idx}`}>
                <a href={r.href}>{r.href}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="content_li_action_btns">
        <button
          onClick={() => {
            setExpanded((prevState) => !prevState);
          }}
        >
          {svgSelector({ svgName: "attachment", svgWidth: "22px", svgHeight: "22px" })}
        </button>
        <button>{svgSelector({ svgName: "options", svgWidth: "22px", svgHeight: "22px" })}</button>
      </div>
    </li>
  );
}

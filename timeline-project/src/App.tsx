import TimelineElement from "./components/TimelineElement";
import { timelineData } from "./utils/timelineData";

export default function App() {
  return (
    <>
      <div className="title">
        <h1>
          <span className="title_first">the</span>
          <span className="title_second">TIME</span>
          <span className="title_third">LINE</span>
        </h1>
        {/* <!-- <h2>47th United States of America <br />President Donald J. Trump</h2> --> */}
        <h2>Elon Reeve Musk</h2>
      </div>
      <main>
        <div className="timeline">
          <div className="timeline_line">
            <div className="timeline_line_cover">
              <span className="timeline_line_point"></span>
            </div>
          </div>
        </div>

        <ul className="timeline_content" id="timeline_content">
          {timelineData.map((td, idx) => {
            return <TimelineElement key={`timeline_element_${idx}`} date={td.date} content={td.content} />;
          })}
        </ul>
      </main>
    </>
  );
}

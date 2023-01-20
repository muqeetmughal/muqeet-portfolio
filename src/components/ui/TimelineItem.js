const TimelineItem = ({ company, job, date, position }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-mark-light" />
      <div className="timeline-mark" />
      <div className="timeline-content">
        <div className="card-header">
          <div className="left-side">
            <h5>
              <span>{company}</span>
            </h5>
            <div className="el-suptitle mb-15">
              <span>{job}</span>
            </div>
          </div>
          <div className="right-side">
            <span className="date">
              <span>{date}</span>
            </span>
          </div>
        </div>
        <div className="el-description">
          <div>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

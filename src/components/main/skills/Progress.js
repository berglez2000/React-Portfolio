
const Progress = ({ skill }) => {
  return (
    <div className="progress__bar">
      <p>{skill}</p>
      <div className="line"></div>
    </div>
  )
}

export default Progress

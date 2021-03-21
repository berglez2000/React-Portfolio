
const Card = ({ color, icon, text }) => {
  return (
    <div className="card" style={{ borderBottom: `1px ${color} solid` }} >
      <i className={icon} style={{ color: `${color}` }} ></i>
      <p>{text}</p>
    </div>
  )
}

export default Card

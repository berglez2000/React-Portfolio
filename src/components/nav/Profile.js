
const Profile = ({ img, name, position }) => {
  return (
    <div className="profile">
      <img src={img} alt="profile__img" />
      <h3 className="name">{name}</h3>
      <p className="position">{position}</p>
    </div>
  )
}

export default Profile

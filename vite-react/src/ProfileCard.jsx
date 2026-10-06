import PropTypes from "prop-types";
import "./App.css";
function ProfileCard({ name, age, status, hobbies, onHobbyClick }) {
  return (
    <div className="profile-card">
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Status :{status ? "Active" : "Inactive"}</h3>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies.map((hobby, index) => {
          return (
            <li key={index} onClick={() => onHobbyClick(hobby)}>
              {hobby}
            </li>
          );
        })} 
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
};

export default ProfileCard;

import React from 'react';
import PropTypes from 'prop-types';
import './profile-card.scss';
import * as images from './../../../../../assets/images';


const ProfileCard = ({ profile, onClick }) => (
  <div className="profile-card">
    <div className="profile-image-container">
      <img src={images[profile.photo]} alt={profile.photo} />
    </div>
    <div className="profile-card-content">
      <p>{profile.name}</p>
      <p>{profile.type}</p>
    </div>
    <div className="profile-card-button">
      <button type="button" onClick={onClick}>Check out</button>
    </div>
  </div>
);

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};
ProfileCard.defaultProps = {
  profile: {
    photo: '',
    name: '',
    type: '',
  },
};
export default ProfileCard;

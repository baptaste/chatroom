import React from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

const Settings = ({
  emailInputValue,
  onEmailInputChange,
  passwordInputValue,
  onPasswordInputChange,
  onSettingsFormSubmit,
}) => (
  <div className="settings">
    <button
      type="button"
      className="settings open-btn"
      onClick={() => console.log('clicked!!')}
    >
      +
    </button>

    <form
      className="settings__form settings__form--open"
      onSubmit={onSettingsFormSubmit}
    >
      <input
        type="email"
        placeholder="Email"
        className="settings__form--input"
        value={emailInputValue}
        onChange={onEmailInputChange}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        className="settings__form--input"
        value={passwordInputValue}
        onChange={onPasswordInputChange}
      />
      <button type="submit" className="settings__form--btn">Envoyer</button>
    </form>
  </div>
);

Settings.propTypes = {
  emailInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  onEmailInputChange: PropTypes.func.isRequired,
  onPasswordInputChange: PropTypes.func.isRequired,
  onSettingsFormSubmit: PropTypes.func.isRequired,
};

export default Settings;

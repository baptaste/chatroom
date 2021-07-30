import React from 'react';
import PropTypes from 'prop-types';

import './settings.scss';

const Settings = ({
  emailInputValue,
  onEmailInputChange,
  passwordInputValue,
  onPasswordInputChange,
  onSettingsFormSubmit,
  isSettingsOpen,
  toggleDisplaySettings,
  isLogged,
  onUserLogout,
}) => (
  <div className={isSettingsOpen ? 'settings settings--open' : 'settings'}>
    <button
      type="button"
      className="settings__display-btn"
      onClick={toggleDisplaySettings}
    >
      +
    </button>
    {!isLogged ? (
      <form
        className="settings__form"
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
    ) : (
      <div className="settings__logged">
        <p className="settings__logged--status">Vous êtes connecté</p>
        <button
          type="button"
          className="settings__form--btn"
          onClick={onUserLogout}
        >
          Se déconnecter
        </button>
      </div>
    )}

  </div>
);

Settings.propTypes = {
  onUserLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isSettingsOpen: PropTypes.bool.isRequired,
  emailInputValue: PropTypes.string.isRequired,
  passwordInputValue: PropTypes.string.isRequired,
  onEmailInputChange: PropTypes.func.isRequired,
  onPasswordInputChange: PropTypes.func.isRequired,
  onSettingsFormSubmit: PropTypes.func.isRequired,
  toggleDisplaySettings: PropTypes.func.isRequired,
};

export default Settings;

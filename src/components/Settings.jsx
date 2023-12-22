import React from "react";
import SettingsNavbar from "./SettingsNavbar";
import SettingsMain from "./SettingsMain";

function Settings(props) {
  return (
    <div className="bg-settings">
      <SettingsNavbar callbackDetailPage={props.callbackDetailPage} />
      <SettingsMain />
    </div>
  );
}

export default Settings;

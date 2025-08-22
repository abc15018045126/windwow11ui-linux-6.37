import React, {useEffect} from 'react';
import {AppDefinition, AppComponentProps} from '../../window/types';

// This component is just a placeholder. The app is launched externally.
const Chrome6App: React.FC<AppComponentProps> = ({setTitle}) => {
  useEffect(() => {
    setTitle('Chrome 6');
  }, [setTitle]);
  return (
    <div className="p-4 bg-zinc-800 text-white">
      Launching Chrome 6... This app will open in a new, separate window.
    </div>
  );
};

export const appDefinition: AppDefinition = {
  id: 'chrome6',
  name: 'Chrome 6',
  icon: 'chrome3', // Reusing the Chrome 3 icon for now
  component: Chrome6App,
  isExternal: true,
  externalPath: 'components/apps/chrome6',
  isPinnedToTaskbar: false,
};

export default Chrome6App;

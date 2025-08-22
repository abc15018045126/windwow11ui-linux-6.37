import React from 'react';
import * as Icons from '../../constants';
import {AppIconProps} from '../../types';

// Create a map of all available icons, using a consistent keying scheme (e.g., lowercase)
const iconMap: {[key: string]: React.FC<AppIconProps>} = {
  start: Icons.StartIcon,
  search: Icons.SearchIcon,
  settings: Icons.SettingsIcon,
  about: Icons.AboutIcon,
  hyper: Icons.HyperIcon,
  fileExplorer: Icons.FileExplorerIcon,
  notebook: Icons.NotebookIcon,
  close: Icons.CloseIcon,
  minimize: Icons.MinimizeIcon,
  maximize: Icons.MaximizeIcon,
  restore: Icons.RestoreIcon,
  chrome: Icons.BrowserIcon,
  chrome2: Icons.Browser2Icon,
  chrome3: Icons.Browser3Icon,
  chrome4: Icons.Browser4Icon,
  chrome5: Icons.BrowserIcon,
  sftp: Icons.SftpIcon,
  appStore: Icons.AppStoreIcon,
  refresh: Icons.RefreshIcon,
  themes: Icons.ThemeIcon,
  folder: Icons.FolderIcon,
  fileCode: Icons.FileCodeIcon,
  fileJson: Icons.FileJsonIcon,
  fileGeneric: Icons.FileGenericIcon,
  star: Icons.StarIcon,
  wifi: Icons.WifiIcon,
  sound: Icons.SoundIcon,
  battery: Icons.BatteryIcon,
  gemini: Icons.GeminiIcon,
  geminiChat: Icons.GeminiIcon,
  properties: Icons.AboutIcon,
  lightbulb: Icons.LightbulbIcon,
  user: Icons.UserIcon,
  copy: Icons.CopyIcon,
  check: Icons.CheckIcon,
  terminus: Icons.HyperIcon, // Re-using HyperIcon for Terminus
  terminusSsh: Icons.HyperIcon, // Re-using HyperIcon for Terminus SSH
};

interface IconProps extends AppIconProps {
  icon?: string | React.FC<AppIconProps>;
}

export const isValidIcon = (
  icon?: string | React.FC<AppIconProps>,
): boolean => {
  if (typeof icon === 'string') {
    return icon in iconMap;
  }
  // If it's not a string, we assume it's a valid component.
  return typeof icon === 'function';
};

export const Icon: React.FC<IconProps> = ({icon, ...rest}) => {
  if (!icon) {
    return <Icons.FileGenericIcon {...rest} />;
  }

  // If the icon is a component, render it directly.
  if (typeof icon === 'function') {
    const IconComponent = icon;
    return <IconComponent {...rest} />;
  }

  // If the icon is a string, look it up in the map.
  if (typeof icon === 'string') {
    const IconComponent = iconMap[icon];
    if (IconComponent) {
      return <IconComponent {...rest} />;
    }
  }

  console.warn(`Icon "${icon}" not found. Falling back to default.`);
  return <Icons.FileGenericIcon {...rest} />;
};

export default Icon;

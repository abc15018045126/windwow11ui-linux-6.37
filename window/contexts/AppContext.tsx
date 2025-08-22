import React from 'react';

import {AppIconProps, AppComponentType} from 'window/types';

// This definition represents the structure of the JSON data in our .app files,
// which is discovered and served by the backend. It also aligns with the
// main AppDefinition for consistency in the UI.
export interface DiscoveredAppDefinition {
  id: string; // filename, e.g., "Notebook.app"
  name: string;
  external?: boolean;
  path?: string;
  appId?: string;
  icon?: string | React.FC<AppIconProps>;
  handlesFiles?: boolean;
  // Added to align with AppDefinition
  isPinnedToTaskbar?: boolean;
  component?: AppComponentType;
}

export interface AppContextType {
  apps: DiscoveredAppDefinition[];
  refreshApps?: () => void;
}

// Provide a default value for the context
export const AppContext = React.createContext<AppContextType>({
  apps: [],
  refreshApps: () => {},
});

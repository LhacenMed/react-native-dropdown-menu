import { requireNativeView } from 'expo';
import * as React from 'react';

import { DropdownMenuViewProps } from './DropdownMenu.types';

const NativeView: React.ComponentType<DropdownMenuViewProps> =
  requireNativeView('DropdownMenu');

export default function DropdownMenuView(props: DropdownMenuViewProps) {
  return <NativeView {...props} />;
}

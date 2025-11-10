import { NativeModule, requireNativeModule } from 'expo';

import { DropdownMenuModuleEvents } from './DropdownMenu.types';

declare class DropdownMenuModule extends NativeModule<DropdownMenuModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<DropdownMenuModule>('DropdownMenu');

import { registerWebModule, NativeModule } from 'expo';

import { DropdownMenuModuleEvents } from './DropdownMenu.types';

class DropdownMenuModule extends NativeModule<DropdownMenuModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(DropdownMenuModule, 'DropdownMenuModule');

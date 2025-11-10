import * as React from 'react';

import { DropdownMenuViewProps } from './DropdownMenu.types';

export default function DropdownMenuView(props: DropdownMenuViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}

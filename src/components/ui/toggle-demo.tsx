"use client";

import { useState } from "react";
import { ToggleSwitch } from "./toggle-switch";

export function ToggleDemo() {
  const [toggleChecked, setToggleChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-3">Default</h3>
        <div className="flex flex-wrap gap-4">
          <ToggleSwitch checked={toggleChecked} onChange={setToggleChecked}>
            roast mode
          </ToggleSwitch>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Checked</h3>
        <div className="flex flex-wrap gap-4">
          <ToggleSwitch checked onChange={() => {}}>
            roast mode
          </ToggleSwitch>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3"> Disabled</h3>
        <div className="flex flex-wrap gap-4">
          <ToggleSwitch checked={false} onChange={() => {}} disabled>
            roast mode
          </ToggleSwitch>
        </div>
      </div>
    </div>
  );
}

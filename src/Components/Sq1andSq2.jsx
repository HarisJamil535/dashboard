import React, { useState } from "react";
import Square1 from "./Square1";
import Square2 from "./Square2";

const Sq1andSq2 = () => {
  const [selectedAction, setSelectedAction] = useState("Contact"); // Default action

  return (
    <div className="flex sm:flex-row flex-col justify-between items-center w-full py-2 border rounded-lg">
      {/* Left-aligned Square1 content */}
      <div className="flex-1 mr-4">
        <Square1 onActionSelect={setSelectedAction} />
      </div>

      {/* Right-aligned Square2 content */}
      <div className="flex-1 ml-4">
        <Square2 isMessageTemplateDisabled={selectedAction === "Follow"} />
      </div>
    </div>
  );
};

export default Sq1andSq2;

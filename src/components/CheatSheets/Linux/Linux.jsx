import React from "react";

import LinuxData from "./linuxData.json";
import CheatSheet from "src/components/CheatSheets/CheatSheet";

const Linux = () => {
    return (
        <div>
            <CheatSheet heading={"Linux"} data={LinuxData} />
        </div>
    );
};

export default Linux;

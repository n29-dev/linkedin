import { Launch } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import Button from "../globals/Button";
import List from "../globals/List";
import "../../styles/headerDropdown.css";

function HeaderDropdown() {
  return (
    <div className="headerDropdown">
      <div className="headerDropdown__single_group">
        <Button
          Icon={Avatar}
          text="Nazib Talukdar"
          secondText="Front-end Developer"
          classes="button__avatar"
        />
        <Button text="View Profile" classes="button__default" />
      </div>
      <div className="headerDropdown__single_group">
        <List
          title={"Account"}
          items={[
            { title: "Try Premium for free", Icon: Launch },
            { title: "Settings & Privacy" },
            { title: "Help" },
            { title: "Language" },
          ]}
        />
      </div>
      <div className="headerDropdown__single_group">
        <List
          title={"Manage"}
          items={[
            { title: "Posts &Activity" },
            { title: "Job Posting Account" },
            { title: "Sign Out" },
          ]}
        />
      </div>
    </div>
  );
}


export default HeaderDropdown;

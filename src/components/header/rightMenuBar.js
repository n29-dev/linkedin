import {
  Explore,
  Payments,
  PeopleAlt,
  PostAdd,
  SignalCellularAlt,
  SmartDisplay,
  Store,
  WifiTetheringError,
} from "@mui/icons-material";
import "../../styles/rightMenuBar.css";
import Button from "../globals/Button";

function RightMenuBar() {
  return (
      <div className="rightMenuBar">
        <h2>Work</h2>
        <div className="rightMenuBar-inner">
          <div className="rightMenuBar__single__group">
            <h4>Visit More Linkedin Products</h4>
            <div className="rightMenuBar__single__group__inner product__icons">
              <Button
                classes={"button__cube"}
                Icon={PostAdd}
                text="Post a job"
              />
              <Button
                classes={"button__cube"}
                Icon={SmartDisplay}
                text="Learning"
              />
              <Button
                classes={"button__cube"}
                Icon={SignalCellularAlt}
                text="Insights"
              />
              <Button
                classes={"button__cube"}
                Icon={WifiTetheringError}
                text="Advertise"
              />
              <Button
                classes={"button__cube"}
                Icon={Explore}
                text="Find Leads"
              />
              <Button classes={"button__cube"} Icon={PeopleAlt} text="Groups" />
              <Button
                classes={"button__cube"}
                Icon={Store}
                text="Service Marketplace"
              />
              <Button classes={"button__cube"} Icon={Payments} text="Salary" />
            </div>
          </div>
          <div className="rightMenuBar__single__group service__links">
            <h4>Linkedin Business Services</h4>
            <div className="rightMenuBar__single__group__inner">
              <Button
                text={"Talent Solutions"}
                secondText="Find, attract and recruit talent"
              />
              <Button
                text={"Sales Solutions"}
                secondText="Unlock sales opportunities"
              />
              <Button
                text={"Post a job for free"}
                secondText="Get your job in front of qulaity canidates"
              />
              <Button
                text={"Learning Solutions"}
                secondText="Develop talent across your organization"
              />
            </div>
          </div>
          <div className="rightMenuBar__single__group service__links">
            <h4>Linkedin Affiliate Program</h4>
            <div className="rightMenuBar__single__group__inner">
              <Button
                text={"Talent Solutions"}
                secondText="Find, attract and recruit talent"
              />
              <Button
                text={"Sales Solutions"}
                secondText="Unlock sales opportunities"
              />
            </div>
          </div>
        </div>
      </div>
  ); //import Icon from '@mui/icons-material/Explore';
}

export default RightMenuBar;

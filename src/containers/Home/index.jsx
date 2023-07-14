import React from "react";
import { Grid } from "@mui/material";
import CampaignCard from "../../components/CampaignCard";
import { campaignList } from "../../constants/dataTest";
import HomeStyle from "./index.style";
const App = () => {
  return (
    <HomeStyle>
      <Grid container direction="column" alignItems="center">
        {campaignList.map((campaign, index) => (
          <Grid className="campaign-item" key={index}>
            <CampaignCard campaign={campaign} />
          </Grid>
        ))}
      </Grid>
    </HomeStyle>
  );
};

export default App;

import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Link,
} from "@mui/material";

function CampaignCard({ campaign }) {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {campaign.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {campaign.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleOpenDetail()}>
          <Link underline="none" to={`/campaign/${campaign.id}`}>
            More Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CampaignCard;

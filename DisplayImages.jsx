import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Paper,
  Link,
} from "@material-ui/core";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import CloudDownloadRoundedIcon from "@material-ui/icons/CloudDownloadRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";

export default function DisplayImages(props) {
  const images = props.image;
  const image = images.map((image) => {
    return (
      <GridListTile key={image.id}>
        return(
        <>
          <Link href="#">
            <Paper elevation={3} spacing={1}>
              <img src={image.largeImageURL} alt="pic" />
            </Paper>
          </Link>
          <GridListTileBar
            title={image.title}
            subtitle={<strong>Creator: {image.user}</strong>}
            actionIcon={
              <>
                <IconButton style={{ color: "red" }}>
                  <FavoriteRoundedIcon />
                </IconButton>
                <IconButton style={{ color: "yellow" }}>
                  <GradeRoundedIcon />
                </IconButton>
                <IconButton style={{ color: "white" }}>
                  <CommentRoundedIcon />
                </IconButton>
                <IconButton style={{ color: "green" }}>
                  <CloudDownloadRoundedIcon />
                </IconButton>
              </>
            }
          />
        </>
        )
      </GridListTile>
    );
  });

  return (
    <GridList cols={3} className="my-4">
      {image}
    </GridList>
  );
}

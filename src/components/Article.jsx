/* eslint-disable react/prop-types */
import { Grid, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Article = ({ article }) => {
  return (
    <>
      <Grid item xs={12} md={6} lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href={article.url}
              target="_blank"
              variant="button"
              width="100%"
            >
              Read more...
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Article;

import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


function News(props: any) {
  return (
    <>
    <Typography variant="h3" className={props.className} mt={5} mb={5}>{props.title}</Typography>
    <Box sx={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}} className="news-main">
    {props.data.slice(props.start,props.end).map((e:any)=>
        <Card sx={{ maxWidth: 245 }} className="new-card-child">
        <CardMedia
          component="img"
          height="200"
          image={`/static/images/news/${e.PostImg}`}
          alt={e.PostImg}
        />
        <CardContent>
          <Button variant="contained" sx={{marginBottom:"10px",fontSize:"11px"}}>{e.PostDate}</Button>
          <Typography variant="body2" color="text.secondary">
          {e.PostDesc} <Link href={`https://${e.PostLink}`} color="primary" target="_blank">{e.PostLink}</Link>
          </Typography>
          <Button href="#" variant="outlined" sx={{marginTop:"10px"}}> <ArrowForward/> </Button>
        </CardContent>
      </Card>
      )}
    </Box>
    </>
  )
}

export default News;
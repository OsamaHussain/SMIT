import { Box, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


function CPost(props: any) {
  return (
    <>
    <Typography variant="h3" className={props.className} mt={5} mb={5}>{props.title}</Typography>
    <Box sx={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
    {props.data.slice(0,props.posts).map((e:any)=>
        <Card sx={{ maxWidth: 345 }}>
        <Typography variant="h6" sx={{color:"#444", margin:"0 20px 0 20px", lineHeight:"23px"}}>
          {e.PostName}
        </Typography>
        <Typography variant="subtitle2" sx={{color:"#444", margin:"10px 22px 10px 22px"}}>
          Date: {e.PostDate}
        </Typography>
        <CardMedia
          component="img"
          height="350"
          image={`/static/images/courses/${e.PostImg}`}
          alt={e.PostImg}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {e.PostDesc} <Link href={`https://${e.PostLink}`} color="primary" target="_blank">{e.PostLink}</Link>
          </Typography>
        </CardContent>
      </Card>
      )}
    </Box>
    </>
  )
}

export default CPost;
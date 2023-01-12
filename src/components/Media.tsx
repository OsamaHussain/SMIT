import { Box, Typography, Card, CardMedia, CardContent, Link } from "@mui/material";

const media = (props:any) => {
  return (
    <>
    <Typography variant="h3" className="blk_typo" mb={5}>{props.title}</Typography>
    <Box sx={{display:"flex", justifyContent:"space-around"}}>
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

export default media
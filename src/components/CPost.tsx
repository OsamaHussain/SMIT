import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


function CPost(props: any) {
  return (
    <>
    <Typography variant="h3" className={props.className} mt={5} mb={5}>{props.title}</Typography>
    <Box sx={{
      display:"flex", 
      justifyContent:props.btm === true ? "flex-start" : "space-between",
      flexWrap:"wrap"
    }} margin={5}>
    {props.data.slice(0,props.posts).map((e:any)=>
        <Card sx={{
           maxWidth: props.w === undefined ? 345 : props.w,
           margin:"15px 5px"
        }}>
        <Typography variant="h6" sx={{
          color:"#444", 
          margin:"0 20px 0 20px",
          lineHeight:"23px", 
          fontSize: props.fs === undefined ? 20 : props.fs,
          display: props.btm === false ? 'block' : 'none' 
          }}>
          {e.PostName}
        </Typography>
        <Typography variant="subtitle2" sx={{
          color:"#444", 
          margin:"10px 22px 10px 22px",
          display: props.btm === false ? 'block' : 'none' 
          }}>
          Date: {e.PostDate}
        </Typography>
        <CardMedia
          component="img"
          height={props.pw=== undefined ? 350 : props.pw}
          image={`/static/images/courses/${e.PostImg}`}
          alt={e.PostImg}
        />
        <CardContent sx={{
          display:'flex',
          flexDirection:'column',
        }}>
          <Typography variant="body2" color="text.secondary" sx={{
            display: props.btm === false ? 'block' : 'none'
          }} >
          {e.PostDesc} <Link href={`https://${e.PostLink}`} color="primary" target="_blank">{e.PostLink}</Link>
          </Typography>
          <Typography variant="h6" sx={{
            color:"#444", 
            margin:"0 0 5px 0",
            lineHeight:"23px", 
            fontSize: props.fs === undefined ? 20 : props.fs,
            display: props.btm === true ? 'block' : 'none' 
            }}>
            {e.PostName}
          </Typography>
          <Button variant="contained" sx={{
            marginBottom:"10px",
            fontSize:"11px",
            display: props.btm === true ? 'block' : 'none' 
          }}>
            {e.PostDate}
          </Button>
          
          <Typography variant="body2" color="text.secondary" sx={{
            display: props.btm === true ? 'block' : 'none' 
          }} >
          {e.PostDesc} <Link href={`https://${e.PostLink}`} color="primary" target="_blank">{e.PostLink}</Link>
          </Typography>
          <Button href="#" variant="outlined" sx={{
            marginTop:"10px",
            display: props.btm === true ? 'flex' : 'none',
          }}>
            <ArrowForward/>
          </Button>
        </CardContent>
      </Card>
      )}
    </Box>
    </>
  )
}

export default CPost;
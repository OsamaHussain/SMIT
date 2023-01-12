import {Facebook, Twitter, YouTube} from '@mui/icons-material';
import {Typography, Link} from '@mui/material';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='col1'>
            <img src="/static/images/logo.png" alt="Salayni LOGO" width={250} />
            <div className='social'>
              <Link href="https://www.facebook.com/SaylaniWelfareInternationalTrust" target="_blank" color="inherit"><Facebook/></Link>
              <Link href="https://twitter.com/OfficialSwit" target="_blank" color="inherit"><Twitter /></Link>
              <Link href="https://www.youtube.com/c/SaylaniWelfareInternationalTrust" target="_blank" color="inherit"><YouTube /></Link>
            </div>
        </div>
        <div className='col2'>
          <Typography variant="h4">About</Typography>
          <Typography variant="body2"><Link href="./about/saylani-introduction" color="inherit" underline="none">Introduction</Link></Typography>
          <Typography variant="body2"><Link href="./about/chairman-message" color="inherit" underline="none">Chairman Message</Link></Typography>
          <Typography variant="body2"><Link href="./about/audit-reports" color="inherit" underline="none">Annual Report</Link></Typography>
          <Typography variant="body2"><Link href="./#bank-details" color="inherit" underline="none">Bank Details</Link></Typography>
        </div>
        <div className='col3'>
          <Typography variant="h4">Explore</Typography>
          <Typography variant="body2"><Link href="./news" color="inherit" underline="none">News</Link></Typography>
          <Typography variant="body2"><Link href="./media" color="inherit" underline="none">Media</Link></Typography>
          <Typography variant="body2"><Link href="./contact-us" color="inherit" underline="none">Contact</Link></Typography>
          <Typography variant="body2"><Link href="./donate" color="inherit" underline="none">Donation</Link></Typography>
        </div>
        <div className='col4'>
         <Typography variant="h4">Contact</Typography>
          <Typography variant="body2">A-25, Bahadurabad Chowrangi Karachi, Pakistan</Typography>
          <Typography variant="body2">UAN: 111-729-526 (+0092-213)4130786-90</Typography>
          <Typography variant="body2">CELL: 92-311-1729526</Typography>
          <Typography variant="body2">USA NO +1(716)941 7792</Typography>
          <Typography variant="body2">UK NO (+44)115 970 6256</Typography>
        </div>
    </div>
  )
}

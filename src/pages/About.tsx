import { CircleOutlined } from '@mui/icons-material';
import { Box, Container, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'

const steps = [
  {
    label: 'Saylani Health',
    sublabel: ['Health Department', 'Blood Bank & Thalassemia Center', 'Hijama', 'X-Ray & Ultrasound', 'Mother & Child Care Center', 'Laboratory Facility', 'Mobile Health Clinic', 'Medical Equipment'],
  },
  {
    label: 'Saylani Education',
    sublabel: ['Saylani Schooling System', 'Textile Training Program', 'R.O. Plant Technician', 'SMIT program', 'Motor Bike Mechanic Training', 'Mobile Repairing', 'SBIL', 'PIAIC', 'Saylani Online Quran Academy', 'Madarsa-e-Faizan-e-Mustafa'],
  },
  {
    label: 'Saylani Food',
    sublabel: ['Saylani Dastarkhuwan', 'Sadqa Meat Distribution', 'Mezban Saylani', 'Saylani Ration Support Program', 'Saylani SAYLANI_BREAKFAST', 'Mobile Dastarkhwan', 'Saylani Roti Bank'],
  },
  {
    label: 'Saylani Welfare',
    sublabel: ['Kafalat Program', 'Microfinance', 'Laptop Financing Scheme', 'Plantation', 'Wedding Program', 'Saylani Job Bank', 'Saylani Housing Scheme', 'Masajid & Madaris Construction'],
  },
  {
    label: 'Clean Drinking Water',
    sublabel: ['R.O Water Plant', 'Water Chillers', 'Well Digging'],
  },
  {
    label: 'Disaster Aid',
    sublabel: ['Corona Relief Program', 'Rain Relief Program', 'Fire Fighting & Rescue'],
  },
  {
    label: 'Saylani & Ehsaas',
    sublabel: ['Langar Khana', 'Panah Gaah', 'Koi Bhooka Na Soye Ga'],
  },
];


const About = () => {
  return (
    <Container>
      <Box className="about-hero">
        <Box>
          <Typography color="#666">About-Introduction</Typography>
          <Typography variant="h4" fontWeight={500} color="rgba(0,0,0,.85)">Introduction</Typography>
          <Typography color="#666">Saylani Welfare International Trust has been serving humanity for 22 years. Saylani has spent around 7 billion rupees in the service of humanity in 2021 and our plan is to spend about 11 billion rupees for this cause in 2022.</Typography>
        </Box>
        <Box>
          <img src="/static/images/about/C65rk7OF.jpg" alt="C65rk7OF.jpg" width="500" />
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" mb={2} mt={5} fontWeight={500} color="rgba(0,0,0,.85)">More</Typography>
        <Typography mb={2}>
Saylani Welfare International Trust has been working for the last 22 years to improve the conditions of the less privileged, helpless, and handicapped individuals. The organization is working day and night to make life happier, especially for the middle class, lower middle class and even lower class. At time of establishing the organization, the founder of Saylani Welfare International Trust and a few of his associates had made a commitment to serve the distressed people living in Pakistan and abroad in all stages of life. It is a blessing in disguise that today the organization is serving humanity in more than 63 areas of life without any discrimination.
        </Typography>
        <Typography mb={2}>
The soul, founder and patron of this organization is Hazrat Allama Maulana Muhammad Bashir Farooqi. He is also a well-known spiritual person and Islamic scholar in the Islamic world. It is the result of his efforts that today Saylani Welfare International Trust is serving humanity all over the world.
        </Typography>
        <Typography mb={2}>
The organization started out as a rented house and today has at least 630 branches worldwide. The organization also has more than 630 Dastarkhwan, where thousands of employees are employed. Today, the organization spends more than 7 billion annually on the service and welfare of humanity. Not only this, but more than 63 spheres of life from birth to death (including food, health, education, social welfare, clean water, marriage, mass I.T training, vocational training, assistance to Syrian and Burmese refugees, pilgrim services, school services fees, easy loans, easy employment, hairdressing, medical & diagnostic center, laboratory tests, x-ray, ultrasound, ECG, consultant clinic, mobile dining, mobile clinic, mobile air care clinic & operation theater, and in case of natural disasters aid) our organization is serving humanity.
        </Typography>
        <Typography mb={2}>
More than 300,000 people are benefited daily by the Saylani. The organization provides vocational training to unskilled people in various fields, renting of poor people houses, school fees and annual expenses of their children, assistance in marriage of their daughters, loan facility for running small scale business, rickshaws and motorbikes for employment, stalls, shop delivery, finger chips machine, sewing machines for women and other items are provided.
        </Typography>
      </Box>

      <Box mt={5}>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} active={true}>
            <StepLabel>
              <Typography variant="h6" color="#1F51FF">
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography sx={{display:"flex", flexWrap:"wrap", justifyContent:"flex-start"}}>
                {step.sublabel.map(e=>(
                    <Box flex={"0 1 auto"} sx={{marginRight:2,marginBottom:2,marginTop:2, display:"flex", alignItems:"center", justifyContent:"center"}}>
                      <CircleOutlined color="primary" aria-label="add" sx={{width:25, height:25, marginRight:1}} />
                      <Typography>{e}</Typography>
                    </Box>
                ))}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>

    </Container>
  )
}

export default About
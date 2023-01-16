import CPost from '../components/CPost';
import News from '../components/News';
import Slider from '../components/Slider';
import courses from "../models/courses-obj";
import news from "../models/news-obj";

const Home = () => {
  return (
    <div>
      <Slider />
      <CPost posts={3} data={courses} title="Courses" className="blk_typo course-main-page" btm={false} />
      <News end={4} data={news} title="News" id="news" className="news blk_typo"/>
      <News start={4} end={8} data={news}/>
    </div>
  )
}

export default Home;
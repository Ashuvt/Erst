import "./ClientSay.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import FeedCard from "./feedcard/FeedCard";
import { images } from "../../../utils/images/images";

export const ClientSay = () => {
  return (
    <section className="client_say p_bottom">
      <div className="content_wrap">
        <MidTitle
          title="What Our Client Say"
          text="We are proud to work with these incredible companies and grateful for their positive feedback, suggestions and incredible support."
        />

        <div className="feed_grid">
          <div className="feed_column">
            <FeedCard
              text='“I just wanted to let you know that your team has been doing a tremendous job on our requests."'
              name="Ethan Black"
              img={images.profilea}
            />
             <FeedCard
              text='“The Intelligent Analytics Suite exceeded our expectations for its ability to process big data.“'
              name="Orest Tink"
              img={images.profileb}
            />
          </div>
          <div className="feed_column">
                <FeedCard
              text='“Live chat obviously made our users happier and more efficient."'
              name="Isabella Stone"
              img={images.profilec}
            />
                <FeedCard
              text='“The perfect tool for our ‘Service with Passion’ motto. From day one, Monday has inspired our trust and amazement. People often tell us that they love the chat and think it’s modern – something they have expected from a company.“'
              name="Amelia Silver"
              img={images.profiled}
            />
          </div>
          <div className="feed_column">
                <FeedCard
              text='“I was surprised by the high frequency of chats and by how the customers using it got right to the point. SaaSup is the most intuitive and modern live chat we found."'
              name="Nathanial Frost"
              img={images.profilee}
            />
                <FeedCard
              text='“People often tell us that they love the chat and think it’s modern – something they have expected from a company.“'
              name="Sophia Rivers"
              img={images.profilef}
            />
          </div>
          <div className="feed_column">
                <FeedCard
              text='“I just checked this out, and have never been so happy.“'
              name="Alexander Steele"
              img={images.profilec}
            />
                <FeedCard
              text='“People often tell us that they love the chat and think it’s modern – something they have expected from a company."'
              name="Penelope Cross"
              img={images.profileb}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;

import "./ClientSay.scss";
import MidTitle from "../../../components/midtitle/MidTitle";
import FeedCard from "./feedcard/FeedCard";
import { images } from "../../../utils/images/images";

export const ClientSay = () => {
  return (
    <section className="client_say p_bottom p_top">
      <div className="content_wrap">
        <MidTitle
          title="What Our Client Say"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi numquam atque doloremque maxime consequatur provident laboriosam adipisci fugiat. Similique, magni!."
        />

        <div className="feed_grid">
          <div className="feed_column">
            <FeedCard
              text='“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione velit veniam expedita nisi facere fugiat ea enim mollitia cupiditate perspiciatis?'
              name="Ethan Black"
              img={images.profilea}
            />
             <FeedCard
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui reprehenderit, pariatur in illum est ut laborum, necessitatibus, iste inventore iusto. Eaque expedita a, ullam consectetur nobis autem, ad voluptatibus error culpa corporis optio odio!'
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
              text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod distinctio a suscipit laboriosam. Corrupti nisi quaerat deserunt. Asperiores eveniet explicabo sit iure, voluptas voluptates?'
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
      <div className="client_say_blur a"></div>
      <div className="client_say_blur b"></div>
      {/* <div className="client_say_blur c"></div> */}
    </section>
  );
};

export default ClientSay;

import { t } from "i18next";
import "./MarqueeText.scss";

const MarqueeText = ({t}) => {
    return(
        <section className="text_slider">
            <div className="over"></div>
        <div className="marquee_text">
            <h2>{t('aboutMarqee')}</h2>
            <h2>{t('aboutMarqee')}</h2>
            <h2>{t('aboutMarqee')}</h2>
            <h2>{t('aboutMarqee')}</h2>
            <h2>{t('aboutMarqee')}</h2>
            <h2>{t('aboutMarqee')}</h2>
        </div>
        </section>
    )
};

export default MarqueeText;
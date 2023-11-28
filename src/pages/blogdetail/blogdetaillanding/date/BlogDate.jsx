import "./BlogDate.scss";

const BlogDate = ({tag, date}) => {
    return(
        <div className="date_wrap wow fadeInUp">
        <button>Blog</button>
        <div className="animated_line">
            <div className="filler"></div>
        </div>
        <p>{date}</p>
    </div>
    )
};

export default BlogDate;
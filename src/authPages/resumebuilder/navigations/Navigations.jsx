import "./Navigations.scss";

const Navigations = ({tabs, tab, setTab}) => {

   


  return (
    <div className="side_menu">        
      {tabs.map((data) => {
        return (
          <button
            type="button"
            className={tab === data.id ? "active" : ""}         
            key={data?.id}
          >
            <div className={`circle ${tab === data.id ? "active" : ""}`}></div>            
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Navigations;

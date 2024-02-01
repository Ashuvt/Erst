const NextPrevBtns = ({tabs, setTab, tab}) => {

    const nextHandler = () => {
        setTab(prev => {
            if(prev === 7){
                return prev;
            }else{
                return prev + 1
            }
        })
    }

    const prevHandler = () => {
      setTab(prev => {
        if(prev === 1){
            return prev;
        }else{
            return prev - 1
        }
    })
    }

    return(
        <div className="navigate_btns">
        <button
          type="button"
          className="primarybtn"
          onClick={prevHandler}
          disabled={tab === 1}
        >
          Back
        </button>
        <button
          type="button"
          className="primarybtn"
          onClick={nextHandler}
          disabled={tab === tabs?.length}
        >
          Next
        </button>
      </div>
    )
}

export default NextPrevBtns;
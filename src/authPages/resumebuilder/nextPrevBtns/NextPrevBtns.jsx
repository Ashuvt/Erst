const NextPrevBtns = ({tabs, tab, goNext, goPrev}) => {
    return(
        <div className="navigate_btns">
        <button
          type="button"
          className="primarybtn"
          onClick={goPrev}
          disabled={tab === 1}
        >
          Back
        </button>
        <button
          type="button"
          className="primarybtn"
          onClick={goNext}
          disabled={tab === tabs?.length}
        >
          Next
        </button>
      </div>
    )
}

export default NextPrevBtns;
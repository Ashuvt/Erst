const NextPrevBtns = ({onNext, onPrev, backDisabled, nextDisabled}) => {
    return(
        <div className="navigate_btns">
        <button
          type="button"
          className="primarybtn"
          onClick={onPrev}
          disabled={backDisabled}
        >
          Back
        </button>
        <button
          type="button"
          className="primarybtn"
          onClick={onNext}
          disabled={nextDisabled}
        >
          Next
        </button>
      </div>
    )
}

export default NextPrevBtns;
const NextPrevBtns = ({onNext, backDisabled, nextDisabled}) => {
    return(
        <div className="navigate_btns">
        <button
          type="button"
          className="primarybtn"
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
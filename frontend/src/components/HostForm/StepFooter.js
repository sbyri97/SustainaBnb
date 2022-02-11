export default function StepFooter({
  nextStep,
  prevStep,
  step,
  disabledStateOnStepper,
}) {
  return (
    <div className="btn-container">
      <div className="button-holder">
        <button
            className="back-button"
            disabled={step === 9}
            style={{ visibility: step !== 0 ? "visible" : "hidden" }}
            type="button"
            onClick={prevStep}
          >
            Back
        </button>
      </div>
      <div className="actualbtn">
        <button
          className="next-button"
          disabled={disabledStateOnStepper()}
          type="button"
          onClick={nextStep}
        >
          {step === 8 ? "Submit Property" : "Next"}
          {step === 9 ? " View Listings" : ""}
        </button>
      </div>
    </div>
  );
}

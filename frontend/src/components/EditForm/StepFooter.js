export default function StepFooter({
  nextStep,
  prevStep,
  step,
  disabledStateOnStepper,
}) {
  return (
    <div className="btn-container">
      <button
        style={{ visibility: step !== 0 ? "visible" : "hidden" }}
        type="button"
        onClick={prevStep}
      >
        Back
      </button>
      <button
        disabled={disabledStateOnStepper()}
        type="button"
        onClick={nextStep}
      >
        {step === 8 ? "Submit Property" : "Next"}
      </button>
    </div>
  );
}

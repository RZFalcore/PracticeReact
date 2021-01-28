export const Type = {
  CHANGE_STEP: "CHANGE_STEP",
};

export const changeStep = (step) => ({
  type: Type.CHANGE_STEP,
  payload: step,
});

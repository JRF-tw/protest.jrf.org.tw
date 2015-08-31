
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const SHOW_RESULT = 'SHOW_RESULT';

export function updateScore(arr) {
  return { type: UPDATE_SCORE, arr };
}

export function showResult(bool) {
  return { type: SHOW_RESULT, bool }
}

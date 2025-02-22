import { readonly, ref } from "vue";
import type { Ref } from "vue";

// 判断是否为数字
const isNumber = (value: unknown): value is number => typeof value === "number";

export interface UseCounterOptions {
  /**
   *  Min count
   */
  min?: number;

  /**
   *  Max count
   */
  max?: number;
}

export interface UseCounterActions {
  /**
   * Increment, default delta is 1
   * @param delta number
   * @returns void
   */
  inc: (delta?: number) => void;

  /**
   * Decrement, default delta is 1
   * @param delta number
   * @returns void
   */
  dec: (delta?: number) => void;

  /**
   * Set current value
   * @param value number | ((c: number) => number)
   * @returns void
   */
  set: (value: number | ((c: number) => number)) => void;

  /**
   * Reset current value to initial value
   * @returns void
   */
  reset: () => void;
}

export type ValueParam = number | ((c: number) => number);

function getTargetValue(val: number, options: UseCounterOptions = {}) {
  const { min, max } = options;
  let target = val;
  if (isNumber(max)) {
    target = Math.min(max, target);
  }
  if (isNumber(min)) {
    target = Math.max(min, target);
  }
  return target;
}

export function useCounter(
  initialValue = 0,
  options: UseCounterOptions = {}
): { value: Ref<number>; actions: UseCounterActions } {
  const { min, max } = options;

  const current = ref(
    getTargetValue(initialValue, {
      min,
      max,
    })
  );

  const setValue = (value: ValueParam) => {
    const target = isNumber(value) ? value : value(current.value);
    current.value = getTargetValue(target, {
      max,
      min,
    });
    return current.value;
  };

  const inc = (delta = 1) => {
    setValue((c) => c + delta);
  };

  const dec = (delta = 1) => {
    setValue((c) => c - delta);
  };

  const set = (value: ValueParam) => {
    setValue(value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value: readonly(current),
    actions: {
      inc,
      dec,
      set,
      reset,
    },
  };
}

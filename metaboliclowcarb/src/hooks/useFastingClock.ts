import { useCallback, useEffect, useMemo, useState } from 'react';
import { calcFastingClock } from '../lib/fasting/calculate';
import type {
  CycleProfile,
  FastingClockState,
  FastingGoalHours,
  FastingMode,
} from '../lib/fasting/types';

const STORAGE_KEY = 'metaboliclowcarb-fasting-clock';

const DEFAULT_STATE: FastingClockState = {
  startTime: null,
  isRunning: false,
  mode: 'assisted',
  goalHours: 16,
  cycleProfile: 'female-cycling',
  glucoseMgDl: null,
  ketonesMmol: null,
};

function loadState(): FastingClockState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as FastingClockState;
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(state: FastingClockState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota errors
  }
}

export interface UseFastingClockOptions {
  defaultGoal?: FastingGoalHours;
  defaultMode?: FastingMode;
}

export function useFastingClock(options: UseFastingClockOptions = {}) {
  const [state, setState] = useState<FastingClockState>(() => {
    const loaded = loadState();
    return {
      ...loaded,
      goalHours: options.defaultGoal ?? loaded.goalHours,
      mode: options.defaultMode ?? loaded.mode,
    };
  });
  const [now, setNow] = useState(Date.now());
  const [showBreakGuide, setShowBreakGuide] = useState(false);
  const [completedFastHours, setCompletedFastHours] = useState<number | null>(null);

  useEffect(() => {
    saveState(state);
  }, [state]);

  useEffect(() => {
    if (!state.isRunning) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [state.isRunning]);

  const result = useMemo(() => calcFastingClock(state, now), [state, now]);

  const start = useCallback(() => {
    setShowBreakGuide(false);
    setCompletedFastHours(null);
    setState((prev) => ({
      ...prev,
      startTime: Date.now(),
      isRunning: true,
    }));
    setNow(Date.now());
  }, []);

  const end = useCallback(() => {
    setState((prev) => {
      const elapsedMs =
        prev.isRunning && prev.startTime ? Math.max(0, Date.now() - prev.startTime) : 0;
      setCompletedFastHours(elapsedMs / (1000 * 60 * 60));
      setShowBreakGuide(true);
      return {
        ...prev,
        isRunning: false,
        startTime: null,
      };
    });
  }, []);

  const reset = useCallback(() => {
    setShowBreakGuide(false);
    setCompletedFastHours(null);
    setState((prev) => ({
      ...prev,
      startTime: null,
      isRunning: false,
    }));
  }, []);

  const setMode = useCallback((mode: FastingMode) => {
    setState((prev) => ({ ...prev, mode }));
  }, []);

  const setGoalHours = useCallback((goalHours: FastingGoalHours) => {
    setState((prev) => ({ ...prev, goalHours }));
  }, []);

  const setCycleProfile = useCallback((cycleProfile: CycleProfile) => {
    setState((prev) => ({ ...prev, cycleProfile }));
  }, []);

  const setGlucose = useCallback((value: number | null) => {
    setState((prev) => ({ ...prev, glucoseMgDl: value }));
  }, []);

  const setKetones = useCallback((value: number | null) => {
    setState((prev) => ({ ...prev, ketonesMmol: value }));
  }, []);

  return {
    state,
    result,
    showBreakGuide,
    completedFastHours,
    start,
    end,
    reset,
    setMode,
    setGoalHours,
    setCycleProfile,
    setGlucose,
    setKetones,
  };
}

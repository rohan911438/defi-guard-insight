import { useCallback, useEffect, useState } from 'react';
import mlEngine from '@/services/mlEngine';
import type { DetectionResult, DetectionRequest, ModelInfo, ModelStatusSummary } from '@/types/ml';

interface UseDetectionState {
  models: ModelInfo[];
  summary: ModelStatusSummary | null;
  loading: boolean;
  lastResult: DetectionResult | null;
  error: string | null;
  history: DetectionResult[];
  feedbackSubmitting: boolean;
}

export const useDetection = () => {
  const [state, setState] = useState<UseDetectionState>({
    models: [],
    summary: null,
    loading: false,
    lastResult: null,
    error: null,
    history: [],
    feedbackSubmitting: false,
  });

  const refresh = useCallback(() => {
    try {
      const models = mlEngine.listModels();
      const summary = mlEngine.getStatusSummary();
      setState(s => ({ ...s, models: [...models], summary }));
    } catch (e: any) {
      setState(s => ({ ...s, error: e.message }));
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const runDetection = useCallback(async (req: DetectionRequest) => {
    setState(s => ({ ...s, loading: true, error: null }));
    try {
      const result = await mlEngine.detect(req);
      setState(s => ({
        ...s,
        loading: false,
        lastResult: result,
        history: [result, ...s.history].slice(0, 25),
      }));
      return result;
    } catch (e: any) {
      setState(s => ({ ...s, loading: false, error: e.message }));
      throw e;
    }
  }, []);

  const toggleModel = useCallback((id: string, enabled: boolean) => {
    mlEngine.toggleModel(id, enabled);
    refresh();
  }, [refresh]);

  const retrainModel = useCallback(async (id: string) => {
    setState(s => ({ ...s, loading: true }));
    await mlEngine.retrainModel(id);
    refresh();
    setState(s => ({ ...s, loading: false }));
  }, [refresh]);

  const submitFeedback = useCallback(async (isTruePositive: boolean, comment?: string) => {
    if (!state.lastResult) return;
    setState(s => ({ ...s, feedbackSubmitting: true }));
    // simulate immediate store
    mlEngine.submitFeedback(state.lastResult.id, isTruePositive, comment);
    await new Promise(res => setTimeout(res, 300));
    setState(s => ({ ...s, feedbackSubmitting: false }));
  }, [state.lastResult]);

  return {
    ...state,
    runDetection,
    toggleModel,
    retrainModel,
    submitFeedback,
    refresh,
  };
};

export default useDetection;

export type ScoringCategory =
  | 'tandem'
  | 'acting'

export interface ScoreInput {
  category: ScoringCategory
  score: number
  weight: number
}

export interface ScoreResult {
  total: number
  maximum: number
  percentage: number
}

export function computeLiveScore(inputs: readonly ScoreInput[]): ScoreResult {
  const totalWeight = inputs.reduce((sum, item) => sum + item.weight, 0)

  if (totalWeight === 0) {
    return {
      total: 0,
      maximum: 0,
      percentage: 0,
    }
  }

  const total = inputs.reduce(
    (sum, item) => sum + item.score * item.weight,
    0,
  )

  const maximum = inputs.reduce(
    (sum, item) => sum + 100 * item.weight,
    0,
  )

  return {
    total,
    maximum,
    percentage: maximum === 0 ? 0 : (total / maximum) * 100,
  }
}

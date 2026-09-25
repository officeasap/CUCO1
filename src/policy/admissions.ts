export interface AdmissionPolicy {
  requiresApplication: boolean
  requiresInterview: boolean
  requiresPayment: boolean
}

export const defaultAdmissionPolicy: AdmissionPolicy = {
  requiresApplication: true,
  requiresInterview: false,
  requiresPayment: true,
}

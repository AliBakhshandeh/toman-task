export enum PaymentType {
    salary = 'salary',
    bonus = 'bonus',
    commission = 'commission',
    transportation = 'transportation',
    overtime = 'overtime',
  }
  
  export enum PaymentStatus {
    success = 'success',
    pending = 'pending',
    failed = 'failed',
  }
  export interface Payment {
    id: string
    type: PaymentType
    value: number
    paid_at: string
    status: PaymentStatus
    description: string | null
  }
  
  export interface PaymentsResponse {
      entities: Payment[]
      total: number
      page: number
      limit: number
    }
    export interface IPaymentsParams {
      page?: number;
      search?: string;
      type?: PaymentType[];
      status?: PaymentStatus[];
  }
  export interface PaymentParams {
    id: string
  }
  export interface PaymentDetailsResponse {
    id: string
    type: PaymentType
    value: number
    paid_at: string
    status: PaymentStatus
    description: string | null
  }
export const PaymentsTypes = {
  salary: 'salary',
  bonus: 'bonus',
  commission: 'commission',
  transportation: 'transportation',
  overtime: 'overtime',
};

export const PaymentStatus = {
  success: 'success',
  pending: 'pending',
  failed: 'failed',
};
const PaymentTypes = Object.values(PaymentsTypes);

export const PaymentTypesOptions = PaymentTypes.map((type) => ({
  value: type,
  label: type,
}));

const PaymentStatuses = [
  PaymentStatus.success,
  PaymentStatus.pending,
  PaymentStatus.failed,
];

export const PaymentStatusesOptions = PaymentStatuses.map((status) => ({
  value: status,
  label: status,
}));
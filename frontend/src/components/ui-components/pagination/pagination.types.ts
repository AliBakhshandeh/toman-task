export interface PaginationProps {
  totalOrders?: number;
  action: (page: number) => void;
  currentPage: number;
  itemsPerPage?: number;
}

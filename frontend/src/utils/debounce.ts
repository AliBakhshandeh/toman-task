export function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
  ): {
    (...args: Parameters<T>): void;
    cancel: () => void;
  } {
    let timeout: NodeJS.Timeout;
  
    const debounced = (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  
    debounced.cancel = () => clearTimeout(timeout);
  
    return debounced;
  }
  
  export default debounce;
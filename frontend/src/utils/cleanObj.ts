const cleanObj = (obj: Record<string, any>): Record<string, any> => {
    return Object.entries(obj)
      .filter(([_, value]) => value !== null && value !== undefined && value !== '')
      .reduce((acc, [key, value]) => {
        acc[key] = typeof value === 'object' && !Array.isArray(value)
          ? cleanObj(value)
          : value;
        return acc;
      }, {} as Record<string, any>);
  };

  export default cleanObj;
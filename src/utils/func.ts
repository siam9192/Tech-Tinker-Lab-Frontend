export function formatTimeAgo(timestamp: string) {
    const now = new Date().valueOf();
    const then = new Date(timestamp).valueOf();
  
    const diffInSeconds = Math.floor((now - then) / 1000);
  
    const units = [
      { label: 'year', value: 60 * 60 * 24 * 365 },
      { label: 'month', value: 60 * 60 * 24 * 30 },
      { label: 'day', value: 60 * 60 * 24 },
      { label: 'hour', value: 60 * 60 },
      { label: 'minute', value: 60 },
      { label: 'second', value: 1 },
    ];
  
    for (const unit of units) {
      const amount = Math.floor(diffInSeconds / unit.value);
      if (diffInSeconds >= unit.value) {
        return `${amount} ${unit.label}s ago`;
      }
    }
  
    return 'just now';
  }
  
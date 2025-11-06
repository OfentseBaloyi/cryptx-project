// src/data/transactionData.js
const transactionData = [
  { id: 1, item: 'BTC Purchase', amount: '$12,000', date: '2025-10-31', status: 'Completed' },
  { id: 2, item: 'ETH Sell', amount: '$400', date: '2025-10-30', status: 'Completed' },
  { id: 3, item: 'Swap USDC→BTC', amount: '$50', date: '2025-10-29', status: 'Pending' },
  { id: 4, item: 'Deposit', amount: '$3,000', date: '2025-10-28', status: 'Completed' },
  { id: 5, item: 'Withdrawal', amount: '$250', date: '2025-10-25', status: 'Failed' },
  { id: 6, item: 'Staking Reward', amount: '$24', date: '2025-10-24', status: 'Completed' }
];

export default transactionData;  // ✅ default export

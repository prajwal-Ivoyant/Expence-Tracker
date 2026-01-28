# Expense Tracker - React Redux Project

A comprehensive expense tracking application built with React and Redux Toolkit. Perfect for learning intermediate Redux concepts including state management, filtering, and data visualization.

## 🎯 Learning Objectives

- Redux Toolkit setup and configuration
- Managing complex state with multiple slices
- CRUD operations with Redux
- Advanced filtering and data aggregation
- Working with dates and calculations
- Data visualization with charts
- LocalStorage persistence

## ✨ Features

### Core Features
- ✅ Add income and expenses with details
- ✅ Categorize transactions (Food, Transport, Entertainment, Bills, Shopping, Other)
- ✅ Delete transactions
- ✅ Edit existing transactions
- ✅ View all transactions in a list

### Filtering & Analytics
- 📊 Filter by category
- 📅 Filter by date range (This Week, This Month, Custom Range)
- 💰 Filter by type (Income, Expense, All)
- 🔍 Search by description
- 📈 Calculate totals (Total Income, Total Expenses, Balance)

### Visualization
- 📊 Pie chart showing expenses by category
- 📈 Line chart showing spending trends over time
- 💡 Summary cards with key metrics

### Additional Features
- 💾 Data persistence with localStorage
- 🎨 Clean, responsive UI
- 📱 Mobile-friendly design

## 🛠️ Tech Stack

- **React** - UI library
- **Redux Toolkit** - State management
- **Recharts** - Data visualization
- **Vite** - Build tool
- **CSS/Tailwind** - Styling (choose your preference)

## 📁 Project Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx       # Form to add/edit transactions
│   │   ├── ExpenseList.jsx       # List of all transactions
│   │   ├── ExpenseItem.jsx       # Individual transaction item
│   │   ├── FilterBar.jsx         # Filters for category, date, type
│   │   ├── Summary.jsx           # Summary cards (income, expense, balance)
│   │   └── Chart.jsx             # Charts for visualization
│   ├── redux/
│   │   ├── store.js              # Redux store configuration
│   │   ├── expensesSlice.js      # Expenses state and actions
│   │   └── filtersSlice.js       # Filters state and actions
│   ├── utils/
│   │   ├── dateHelpers.js        # Date utility functions
│   │   └── calculations.js       # Calculation helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or create the project**
```bash
npm create vite@latest expense-tracker -- --template react
cd expense-tracker
```

2. **Install dependencies**
```bash
npm install @reduxjs/toolkit react-redux recharts
```

3. **Start development server**
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Data Structure

### Expense Object
```javascript
{
  id: 'unique-id',
  type: 'expense', // or 'income'
  amount: 50.00,
  description: 'Grocery shopping',
  category: 'Food',
  date: '2026-01-27',
  createdAt: '2026-01-27T10:30:00.000Z'
}
```

### Categories
- Food
- Transport
- Entertainment
- Bills
- Shopping
- Healthcare
- Other

## 🎓 Key Redux Concepts Practiced

1. **Store Configuration** - Setting up Redux Toolkit store
2. **Slices** - Creating feature-based state slices
3. **Actions** - Dispatching actions to update state
4. **Reducers** - Pure functions that update state
5. **Selectors** - Deriving data from state
6. **useSelector Hook** - Reading state in components
7. **useDispatch Hook** - Dispatching actions from components
8. **Immer Integration** - Mutating state directly (Redux Toolkit)
9. **Prepare Callbacks** - Generating unique IDs and timestamps
10. **Multiple Slices** - Managing different parts of state

## 🔥 Challenges & Extensions

Once you complete the basic version, try these:

### Easy
- [ ] Add more categories
- [ ] Implement edit functionality
- [ ] Add confirmation dialog for delete
- [ ] Sort expenses by date/amount
- [ ] Add currency selector

### Medium
- [ ] Recurring expenses (monthly bills)
- [ ] Budget limits per category with warnings
- [ ] Export data to CSV
- [ ] Import data from CSV
- [ ] Multiple accounts/wallets
- [ ] Tags for transactions

### Advanced
- [ ] Yearly comparison charts
- [ ] Budget planning for future months
- [ ] Bill reminders
- [ ] Multi-currency support with conversion
- [ ] Receipt image upload
- [ ] Split expenses between multiple people

## 📚 Learning Resources

- [Redux Toolkit Official Docs](https://redux-toolkit.js.org/)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)
- [Recharts Documentation](https://recharts.org/)
- [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools)

## 🐛 Common Issues & Solutions

**Issue**: State not persisting
- **Solution**: Check localStorage implementation, ensure store.subscribe is called

**Issue**: Filters not working
- **Solution**: Verify selector logic, check that filters slice is properly connected

**Issue**: Charts not rendering
- **Solution**: Ensure data format matches Recharts requirements, check console for errors

**Issue**: Duplicate IDs
- **Solution**: Use nanoid or Date.now() for unique IDs

## ⏱️ Time Estimates

- Basic setup: 30 minutes
- CRUD operations: 45 minutes  
- Filtering system: 60 minutes
- Charts: 45-60 minutes
- Polish & localStorage: 30 minutes
- **Total: 3.5 - 4 hours**

## 🎯 Success Criteria

By the end of this project, you should be able to:
- ✅ Set up Redux Toolkit from scratch
- ✅ Create and manage multiple state slices
- ✅ Implement CRUD operations with Redux
- ✅ Filter and aggregate data using selectors
- ✅ Connect React components to Redux state
- ✅ Persist state to localStorage
- ✅ Visualize data with charts

## 📄 License

This project is open source and available for learning purposes.

## 🤝 Contributing

Feel free to fork this project and add your own features!

---

**Happy Coding! 🚀**

Build this project step by step, and you'll have a solid understanding of React Redux fundamentals. Don't rush—take time to understand each concept before moving forward.

# Donation Manager

This is a frontend coding challenge built with **React** and **Ant Design**. It allows users to view, filter, and create donation items using a provided API.

---

## Features

- View donation items in a responsive table
- Filter donations by status (Active, Inactive, Awaiting Approval)
- Add new donation items via a form with validation
- Real-time form feedback (e.g. unique name check, price validation)
- Responsive layout with Ant Design components

---

## Tech Stack

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- CSS Modules / Inline styling (no CSS framework required)
- REST API integration

---

## Folder Structure (Simplified)
```bash
  senior-react-task/
  ├── public/
  ├── src/
  │ ├── components/
  │ │ ├── DonationForm.js
  │ │ └── DonationList.js
  │ ├── utils/
  │ │ ├── validators.js
  │ │ ├── columns.js
  │ │ └── helpers.js
  │ ├── api/
  │ │ └── index.js
  │ └── App.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

## Setup Instructions

1. **Clone the repository (if hosted):**

```bash
git clone https://github.com/abbasifaizan70/Donation-Management-System
cd Donation-Management-System
```


2. **Install dependencies:** 

```
npm install
```

3. **Start the app:** 
```
npm start
```

## Access API Docs (for testing):
   https://n3o-coding-task-react.azurewebsites.net/swagger/index.html

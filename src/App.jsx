// src/App.jsx
import React from 'react';
import Sidebar from './components/layout/Sidebar.jsx';
import Header from './components/layout/Header.jsx';
import MainContent from './components/layout/MainContent.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <MainContent />
        </main>
      </div>
    </div>
  );
}

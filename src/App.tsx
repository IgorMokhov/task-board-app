import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout/MainLayout';
import { SettingsPage } from './pages/SettingsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { ClientsPage } from './pages/ClientsPage';
import { EmployeesPage } from './pages/EmployeesPage';
import { RequestsPage } from './pages/RequestsPage';
import { KnowledgeBasePage } from './pages/KnowledgeBasePage';
import './App.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

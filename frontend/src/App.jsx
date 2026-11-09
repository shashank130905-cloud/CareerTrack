import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import JobDetail from './pages/JobDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
export default function App(){return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/jobs/:id" element={<JobDetail/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/admin" element={<AdminDashboard/>}/><Route path="*" element={<div className="state">Page not found · <a href="/">Return home</a></div>}/></Routes></Layout>}
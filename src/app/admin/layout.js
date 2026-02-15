"use client";

import { useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { createTheme } from '@/theme';
import { IconButton, InputBase, Box, Avatar } from '@mui/material';
import '../admin/admin.css';

export default function AdminLayout({ children }) {
  const theme = createTheme({ colorPreset: 'green', contrast: 'high' });
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = useCallback(() => {

    try {
      localStorage.removeItem('admin');
    } catch (e) {}
    router.push('/');
  }, [router]);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="admin-dashboard">
          <aside className="admin-sidebar full">
            <div className="sidebar-header">
              <Link href="/admin" className="brand-link">
                <div className="buku-berea">Buku Berea</div>
              </Link>
            </div>

            <nav className="sidebar-nav">
              <Link href="/admin/homepage" className={`side-item ${pathname === '/admin/homepage' ? 'active' : ''}`}>
                <div className="side-icon"><i className="fas fa-home"></i></div>
                <div className="side-label">Homepage</div>
              </Link>

              <Link href="/admin" className={`side-item ${pathname === '/admin' ? 'active' : ''}`}>
                <div className="side-icon"><i className="fas fa-chart-line"></i></div>
                <div className="side-label">Dashboard</div>
              </Link>

              <div className="sidebar-sep" />

              <Link href="/admin/" className={`side-item ${pathname && pathname.startsWith('/admin/friends') ? 'active' : ''}`}>
                <div className="side-icon"><i className="fas fa-bookmark"></i></div>
                <div className="side-label">Kategory Buku</div>
              </Link>

              <Link href="/admin/subscription" className={`side-item ${pathname && pathname.startsWith('/admin/subscription') ? 'active' : ''}`}>
                <div className="side-icon"><i className="fas fa-book"></i></div>
                <div className="side-label">Kelola Buku</div>
              </Link>

              <div className="sidebar-sep" />
            </nav>
          </aside>

          {/* Topbar / Navbar */}
          <header className="topbar">
            <div className="topbar-inner">
              <Box className="topbar-left" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <div className="topbar-search">
                  <div className="search-icon"><i className="fas fa-search" style={{ fontSize: '14px' }}></i></div>
                  <InputBase placeholder="Search..." className="search-input" />
                </div>
              </Box>

              <div className="topbar-right">
                <IconButton size="small" aria-label="profile">
                  <Avatar sx={{ width: 36, height: 36 }}><i className="fas fa-user"></i></Avatar>
                </IconButton>
                <IconButton size="small" aria-label="logout" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt" style={{ color: '#fff' }}></i>
                </IconButton>
              </div>
            </div>
          </header>

          {/* Main content area (children provided by pages) */}
          <main className="admin-content">
            {children}
          </main>
        </div>

      </ThemeProvider>
    </HelmetProvider>
  );
}

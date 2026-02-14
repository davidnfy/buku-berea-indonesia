"use client";

import BookPage from '../../page';
import { Helmet } from 'react-helmet-async';

export default function AdminHomepage() {
  return (
    <>
      <Helmet>
        <title>Admin — Homepage</title>
      </Helmet>

      <div className="admin-homepage-preview">
        <BookPage />
      </div>
    </>
  );
}

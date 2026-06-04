/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

// Home is eager (the landing page) for fastest first paint.
// Every other route is code-split so the phone only downloads it on navigation.
const ServiceDetail = lazy(() =>
  import('./pages/ServiceDetail').then((m) => ({ default: m.ServiceDetail })),
);
const Organizations = lazy(() =>
  import('./pages/Organizations').then((m) => ({ default: m.Organizations })),
);
const Individuals = lazy(() =>
  import('./pages/Individuals').then((m) => ({ default: m.Individuals })),
);
const Facilitation = lazy(() =>
  import('./pages/Facilitation').then((m) => ({ default: m.Facilitation })),
);
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));

const Router = import.meta.env.BASE_URL !== '/' ? HashRouter : BrowserRouter;

const RouteFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-accent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <main className="relative bg-bg text-primary">
        <Navbar />

        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/individuals" element={<Individuals />} />
            <Route path="/facilitation" element={<Facilitation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

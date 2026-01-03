// Accessibility utilities and hooks
'use client';

import { useCallback, useEffect, useRef } from 'react';

// Focus trap hook for modals and menus
export function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) return;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus first element on mount
    firstElement?.focus();

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return containerRef;
}

// Hook to handle escape key
export function useEscapeKey(callback: () => void, isActive: boolean = true) {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [callback, isActive]);
}

// Hook to handle click outside
export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  isActive: boolean = true
) {
  useEffect(() => {
    if (!isActive) return;

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback, isActive]);
}

// Skip to main content link component
export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#0066FF] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
    >
      Skip to main content
    </a>
  );
}

// Announce to screen readers
export function useAnnounce() {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const element = document.createElement('div');
    element.setAttribute('aria-live', priority);
    element.setAttribute('aria-atomic', 'true');
    element.className = 'sr-only';
    element.textContent = message;

    document.body.appendChild(element);

    setTimeout(() => {
      document.body.removeChild(element);
    }, 1000);
  }, []);

  return announce;
}

// ARIA labels for common elements
export const ariaLabels = {
  navigation: {
    main: 'Main navigation',
    mobile: 'Mobile navigation menu',
    toggle: 'Toggle navigation menu',
    breadcrumb: 'Breadcrumb navigation',
  },
  actions: {
    close: 'Close',
    open: 'Open',
    expand: 'Expand',
    collapse: 'Collapse',
    previous: 'Previous',
    next: 'Next',
    submit: 'Submit form',
    search: 'Search',
  },
  themes: {
    toggle: 'Toggle color theme',
    light: 'Switch to light mode',
    dark: 'Switch to dark mode',
    system: 'Use system theme',
  },
  social: {
    twitter: 'Visit our Twitter page',
    linkedin: 'Visit our LinkedIn page',
    github: 'Visit our GitHub page',
    instagram: 'Visit our Instagram page',
    facebook: 'Visit our Facebook page',
  },
  footer: {
    newsletter: 'Newsletter subscription form',
    contact: 'Contact information',
    quickLinks: 'Quick navigation links',
    legal: 'Legal pages',
  },
};

// Keyboard navigation helpers
export const keyboardShortcuts = {
  home: 'Home',
  end: 'End',
  arrowUp: 'ArrowUp',
  arrowDown: 'ArrowDown',
  arrowLeft: 'ArrowLeft',
  arrowRight: 'ArrowRight',
  enter: 'Enter',
  space: ' ',
  escape: 'Escape',
  tab: 'Tab',
};

// Role descriptions
export const roleDescriptions = {
  button: 'button',
  link: 'link',
  navigation: 'navigation',
  banner: 'banner',
  main: 'main',
  complementary: 'complementary',
  contentinfo: 'contentinfo',
  search: 'search',
  form: 'form',
  region: 'region',
  article: 'article',
  list: 'list',
  listitem: 'listitem',
  tablist: 'tablist',
  tab: 'tab',
  tabpanel: 'tabpanel',
  dialog: 'dialog',
  alertdialog: 'alertdialog',
  menu: 'menu',
  menuitem: 'menuitem',
  tooltip: 'tooltip',
};

# Infinite Redirect Loop in Next.js

This repository demonstrates a common but easily overlooked bug in Next.js applications: infinite redirect loops.  The bug occurs when using the `router.push` method with the current route, leading to continuous redirection and a broken user experience.

## Bug Description
The provided code snippet uses `router.push(router.asPath)` within a button's onClick handler. Because `router.asPath` represents the current route, this leads to an infinite redirect loop. Every click pushes the user to the same location, which triggers another redirect.

## Solution
The solution involves avoiding pushing the current route.  We can instead use a state variable to manage the redirect condition or employ other techniques to prevent this repetitive redirection.
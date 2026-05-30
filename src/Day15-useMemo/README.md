# Day 15 - useMemo in React

## Scenario

How to optimize performance in React by avoiding unnecessary re-computations?

## Solution

Used useMemo hook to memoize expensive calculations and prevent unnecessary re-renders.

## Implementation

* Used useMemo to store computed values
* Recomputed values only when dependencies change
* Optimized performance for heavy calculations
* Prevented unnecessary function executions

## Key Learning

useMemo helps improve performance by memoizing values and avoiding repeated calculations, especially in components with expensive operations.

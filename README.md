#  Palindrome Checker

A real-time Palindrome Checker built using **both Vue 3 and React**. 

I implemented this exact same UI and validation logic in two different ecosystems to deeply understand how each framework handles reactive side effects and state synchronization under the hood.

---

### ✨ Features

- **Real-Time Validation:** Instantly checks if the input is a palindrome as the user types.
- **Dynamic Visual Feedback:** Conditionally renders green or red text colors based on the validation result.
- **Edge Case Handling:** Properly handles empty inputs and single-character strings.
- **Consistent UI:** Both versions share the exact same Tailwind CSS design language.

---

### 🛠️ Tech Stack

This repository is neatly divided into two independent implementations:

**1. Vue 3 Version (`/vue`)**
- **Framework:** Vue 3 (Composition API)
- **Key Concept:** Uses the `watch` API to reactively monitor input changes and update the UI without manual dependency arrays.

**2. React Version (`/react`)**
- **Framework:** React 18+ (Functional Components)
- **Key Concept:** Uses the `useEffect` hook with a strict dependency array `[input]` to trigger the validation logic only when the input state changes.

**Shared:**
- 🎨 **Tailwind CSS** (Utility-first styling)

---

### 🚀 Live Demos & Source

| Framework | Live Preview | Source Code |
| :--- | :--- | :--- |
| ⚡ **Vue 3** | [🔗 View Vue Live Demo]() | [`/vue`](#) |
| ⚛️ **React** | [🔗 View React Live Demo]() | [`/react`](#) |

---
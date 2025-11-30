📝 **Daily Learning Log – 30 Nov 2025**  
**Repo:** `daily-learning-js`  
**Branch:** `main`  
**Tag:** `day-001-basics-and-browser-setup`

---

### 🎯 Today’s Mission
Move from *“I ran a .js file in Node”* to *“I understand how JavaScript actually gets executed in the real world (the browser) and why the three declaration keywords matter.”*

---

### 📚 Concepts Added to Mental Model

| Concept | TL;DR | Deep Dive |
|---------|-------|-----------|
| **var** | Legacy, function-scoped, hoist-initialized, re-declarable. | Feels like a global citizen that can slip through walls (function scope) and duplicate itself. Causes spooky-action-at-a-distance bugs. |
| **let** | Block-scoped, TDZ-protected, single-declaration, re-assignable. | The “responsible adult” variable. Lives only inside its curly-brace house, can’t be reborn with the same name, but can swap its backpack contents. |
| **const** | Block-scoped, TDZ-protected, single-declaration, **binding**-immutable. | Super-strict security guard. Once it holds a reference, the reference never changes. **BUT** the object/array **inside** the reference is still mutable. |
| **Script vs Module vs Node** | `.js` file ≠ universal runtime. | Node wraps code in a private scope; browsers need an HTML entry point. Console output appears in **DevTools → Console**, not the terminal. |
| **Live-Server Workflow** | Save → Auto-reload → Instant feedback loop. | Eliminates the “alt-tab / F5 / curse” cycle; keeps learner in flow state. |

---

### 🧪 Experiments Performed

1. **Node Run**  
   `node test.js` → silent return → added `console.log("✅ Node.js is working!");` → success.  
   **Aha:** No HTML → no DOM → no browser APIs.

2. **Browser Run**  
   Created `index.html`, added `<script src="test.js"></script>`, opened via `index.html` → nothing visible → opened DevTools → saw log.  
   **Aha:** Browser console ≠ terminal console.

3. **Scope Demo**  
   ```js
   // test.js
   if (true) {
       var a = 1;
       let b = 2;
       const c = 3;
   }
   console.log(a); // 1  (leaked!)
   console.log(b); // ReferenceError
   console.log(c); // ReferenceError
   ```
   **Aha:** `var` leaks, `let`/`const` respect block boundaries.

4. **Const Misconception Buster**  
   ```js
   const user = { name: "Ana" };
   user.name = "Ben";     // ✅ allowed
   // user = {};          // ❌ TypeError
   ```
   **Aha:** `const` freezes the **binding**, not the **value**.

5. **Live-Server Setup**  
   Installed VS Code extension → right-click `index.html` → “Open with Live Server” → edits reflect instantly.  
   **Aha:** Feedback loop shrank from 5 s to 0.2 s → dopamine ↑ → learning velocity ↑.


### 🧠 Metacognition & Pitfalls
- **Pitfall:** Thinking “no output” equals “code broken”; reality = “runtime silent by design.”  
- **Fix:** Always seed a `console.log('file loaded')` sanity check.
- **Pitfall:** Using `var` out of habit from copy-pasted StackOverflow answers.  
- **Fix:** ESLint rule `"no-var": "error"` added to repo.
- **Pitfall:** Forgetting that Live-Server only serves `localhost`, not `file://`; CORS blocks `fetch()` unless served.  
- **Fix:** Mental note → future AJAX days require server or `npx serve`.

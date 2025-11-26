# js-journey
Daily log while learning modern JavaScript from scratch.

---

## Day 5 – 2025-11-27  
**Topic:** Higher-Order Functions & Immutable Cart

### ✅ What I did
1. Re-wrote cart operations as **pure functions**:
   - `addItem(cart, price)`  
   - `removeItem(cart, idx)`  
   - `total(cart)`  
   - `tax(cart, rate = 0.08)`
2. Used array methods `map`, `filter`, `reduce`; no mutation of original cart.
3. Practised arrow-function syntax and default parameters.
4. Created first micro-project repo and adopted mentor-driven issue flow.

### 📌 Snippet I’m proud of
```javascript
const addItem = (cart, price) =&gt; [...cart, price];
const total   = cart =&gt; cart.reduce((sum, p) =&gt; sum + p, 0);

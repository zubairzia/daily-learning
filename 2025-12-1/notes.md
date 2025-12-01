# 📌 **Summary — JavaScript Operators (Today’s Learning)**

Today I learned about **operators in JavaScript** — the symbols that allow us to perform actions like calculations, comparisons, assignments, and logical decisions. Operators help JavaScript process data and control the flow of a program.

---

## 🔹 **1. Arithmetic Operators**

Used for basic mathematical calculations.

Examples:
`+` `-` `*` `/` `%` `**`

```js
let a = 10;
let b = 3;

a + b; // 13
a % b; // 1
a ** b; // 1000
```

---

## 🔹 **2. Assignment Operators**

Used to assign values or update existing ones.

Examples:
`=` `+=` `-=` `*=` `/=` `%=` `**=`

```js
let x = 5;
x += 3; // x = 8
```

---

## 🔹 **3. Comparison Operators**

Used to compare two values and return a boolean (`true` or `false`).

Examples:
`==` `===` `!=` `!==` `>` `<` `>=` `<=`

```js
5 == "5";  // true (loose)
5 === "5"; // false (strict)
```

---

## 🔹 **4. Logical Operators**

Used for conditions and decision-making.

Examples:
`&&` (AND), `||` (OR), `!` (NOT)

```js
true && false; // false
true || false; // true
!true;         // false
```

---

## 🔹 **5. Unary Operators**

Work on a single operand.

Examples:
`++` `--` `typeof` `!`

```js
let num = 5;
num++;  // 6
typeof "abc"; // "string"
```

---

## 🔹 **6. Ternary Operator**

Short form of an `if-else`.

```js
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
```

---

## 🔹 **7. String Operators**

Only one common one: `+` for concatenation.

```js
"Hello " + "World"; // "Hello World"
```

---

## 🔹 **8. Bitwise Operators**

Operate on binary values.

Examples:
`&` `|` `^` `~` `<<` `>>`

(Not commonly used for beginners.)

---

# 🎯 **What I learned today**

* How operators work in JavaScript
* Difference between arithmetic, logical, assignment, comparison, and ternary operators
* How to make decisions using logical and comparison operators
* How to shorten conditions using the ternary operator
* Why `===` is preferred over `==`

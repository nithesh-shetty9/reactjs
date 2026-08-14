# CSS Grid — Quick README

## 1. `display: grid`

When you write:

```css
.container {
    display: grid;
}
```

the container becomes a **Grid container**, similar to how:

```css
.container {
    display: flex;
}
```

makes it a **Flex container**.

The child elements of the container become **grid items**.

By default, Grid creates **one column**.

---

## 2. `gap`

`gap` controls the space between grid items.

```css
.container {
    display: grid;
    gap: 20px;
}
```

This gives `20px` space between both rows and columns.

You can separately control them:

```css
.container {
    row-gap: 20px;
    column-gap: 30px;
}
```

Or use the shorthand:

```css
.container {
    gap: 20px 30px;
}
```

The order is:

```text
row-gap    column-gap
   ↓           ↓
  20px        30px
```

---

# 3. `grid-template-columns`

This property defines **how many columns** the grid has and how much space each column takes.

### Default

If you don't specify columns:

```css
.container {
    display: grid;
}
```

there is effectively **one column**.

---

## Syntax 1: Fixed sizes

You can specify the size of each column:

```css
.container {
    grid-template-columns: 100px 200px 300px;
}
```

This creates **3 columns**:

```text
┌───────┬────────────┬────────────────┐
│100px  │   200px    │     300px      │
└───────┴────────────┴────────────────┘
```

You can use different CSS units:

```css
grid-template-columns: 100px 20% 1fr;
```

---

# 4. Percentage (`%`)

You can specify columns using percentages:

```css
.container {
    grid-template-columns: 25% 25% 50%;
}
```

This creates 3 columns:

```text
25%        25%              50%
┌────────┬────────┬──────────────────┐
│        │        │                  │
└────────┴────────┴──────────────────┘
```

Be careful with `gap`, because percentages + gaps can sometimes make the total width exceed the container.

---

# 5. `fr` — Fractional Unit

`fr` means **fraction of the available space**.

### Equal fractions

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

There are 4 equal columns:

```text
┌────────┬────────┬────────┬────────┐
│  1fr   │  1fr   │  1fr   │  1fr   │
└────────┴────────┴────────┴────────┘
```

Each gets an equal share of the available space.

Instead of writing:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

you can use:

```css
grid-template-columns: repeat(4, 1fr);
```

---

# 6. Different `fr` values

```css
grid-template-columns: 2fr 1fr 1fr 1fr;
```

Total fractions:

```text
2 + 1 + 1 + 1 = 5fr
```

So the available space is divided into **5 parts**.

```text
┌──────────────────┬────────┬────────┬────────┐
│       2fr        │  1fr   │  1fr   │  1fr   │
└──────────────────┴────────┴────────┴────────┘
```

The first column gets **twice as much space** as each of the other columns.

---

# 7. `repeat()`

`repeat()` makes repetitive grid definitions easier.

Instead of:

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
```

write:

```css
grid-template-columns: repeat(4, 1fr);
```

Syntax:

```css
repeat(number-of-times, size)
```

Example:

```css
grid-template-columns: repeat(3, 200px);
```

means:

```css
grid-template-columns: 200px 200px 200px;
```

---

# 8. `auto`

You can also use `auto`:

```css
grid-template-columns: auto auto auto;
```

The browser distributes the available space based on the content and available size.

You can mix `auto` and `fr`:

```css
grid-template-columns: 1fr auto auto;
```

Here:

* `1fr` gets the remaining flexible space
* `auto` sizes itself based on its content/available space

For example:

```text
┌────────────────────────┬──────────┬──────────┐
│         1fr            │   auto   │   auto   │
└────────────────────────┴──────────┴──────────┘
```

### Important correction

`auto` is **not exactly the same thing as `1fr`**.

They behave differently.

`1fr` means:

> Take one fraction of the **remaining available space**.

`auto` generally means:

> Size the track based on its content and alignment/available space.

So remember:

```text
1fr → flexible remaining space
auto → content/available-space based
```

---

# 9. `grid-template-rows`

Everything you can do with columns can also be done with rows.

For example:

```css
.container {
    display: grid;
    grid-template-rows: 100px 200px 100px;
}
```

This creates three rows:

```text
┌──────────────────────────┐
│          100px           │
├──────────────────────────┤
│          200px           │
├──────────────────────────┤
│          100px           │
└──────────────────────────┘
```

You can also use:

```css
grid-template-rows: repeat(3, 1fr);
```

or:

```css
grid-template-rows: 2fr 1fr 1fr;
```

---

# 10. `justify-content`

`justify-content` controls the **entire grid inside the container along the horizontal/inline axis** when there is extra space.

Example:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    justify-content: center;
}
```

Possible values:

```css
justify-content: start;
justify-content: end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```

For example:

```text
justify-content: center

┌──────────────────────────────────────┐
│        ┌────┬────┬────┐              │
│        │    │    │    │              │
│        └────┴────┴────┘              │
└──────────────────────────────────────┘
```

---

# 11. `align-content`

`align-content` controls the **entire grid along the vertical/block axis** when there is extra space.

```css
.container {
    align-content: center;
}
```

Common values:

```css
align-content: start;
align-content: end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

---

# 12. `justify-items`

This controls how **individual grid items** are positioned horizontally inside their own grid cells.

```css
.container {
    justify-items: center;
}
```

Think:

```text
Grid container
┌──────────┬──────────┐
│    ↓     │    ↓     │
│  [item]  │  [item]  │
│    ↑     │    ↑     │
└──────────┴──────────┘
```

---

# 13. `align-items`

This controls how **individual grid items** are positioned vertically inside their grid cells.

```css
.container {
    align-items: center;
}
```

---

# 14. Very Important Difference

Don't confuse:

```css
justify-content
align-content
```

with:

```css
justify-items
align-items
```

### `*-content`

Controls the **whole grid** inside the container.

```text
container
┌──────────────────────────────┐
│                              │
│      ┌──┬──┬──┐              │
│      │  │  │  │              │
│      └──┴──┴──┘              │
│                              │
└──────────────────────────────┘
        ↑
   whole grid
```

### `*-items`

Controls **items inside their individual grid cells**.

```text
┌────────────┬────────────┐
│     ↓      │      ↓     │
│   [item]   │   [item]   │
│     ↑      │      ↑     │
└────────────┴────────────┘
       ↑
   individual item
```

---

# 15. Quick Cheat Sheet

| Property                | Purpose                                   |
| ----------------------- | ----------------------------------------- |
| `display: grid`         | Makes container a grid                    |
| `gap`                   | Space between rows and columns            |
| `row-gap`               | Space between rows                        |
| `column-gap`            | Space between columns                     |
| `grid-template-columns` | Defines columns                           |
| `grid-template-rows`    | Defines rows                              |
| `fr`                    | Fraction of available space               |
| `repeat()`              | Repeats a track definition                |
| `auto`                  | Content/available-space based sizing      |
| `justify-content`       | Positions the **whole grid** horizontally |
| `align-content`         | Positions the **whole grid** vertically   |
| `justify-items`         | Positions items horizontally inside cells |
| `align-items`           | Positions items vertically inside cells   |

### The easiest mental model

```text
                  GRID CONTAINER
┌──────────────────────────────────────────┐
│                                          │
│   ┌────────┬────────┬────────┐           │
│   │        │        │        │           │
│   │ Item   │ Item   │ Item   │  ← row    │
│   ├────────┼────────┼────────┤           │
│   │        │        │        │           │
│   │ Item   │ Item   │ Item   │  ← row    │
│   └────────┴────────┴────────┘           │
│                                          │
└──────────────────────────────────────────┘
       ↑        ↑        ↑
     column   column   column
```

**`grid-template-columns` → controls columns**

**`grid-template-rows` → controls rows**

**`gap` → space between them**

**`justify-content / align-content` → move the whole grid**

**`justify-items / align-items` → position items inside their cells**
----------------------------------
About grid childs
----------------
grid template area is crayzzy bro;

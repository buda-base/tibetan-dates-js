# Mathematical demonstration

Our variables are:
- `a` = the animal (starting at 0)
- `e` = the element (starting at 0)
- `yir` = year in Rabjung (starting at 1)
- `n` = year in Rabjung rank (starting at 0) `n = yir -1`

This demo is related to the Chinese remainder theorem.

Given `a` and `e`, we know we have:

```
n ≡ a [12]
```

Finding the condition for `e` requires looking at the pattern for `e` for consecutive `n`, they are pattern of 10 values (`0`, `1`, `1`, `2`, `2`, `3`, etc.)

Let's call `f` a variable so that:

| f | e |
| --- | --- |
|0 | 0 |
|1 | 1 |
|2| 1|
|3| 2|
|4| 2|
|5| 3|
|6| 3|
|7| 4|
|8| 4|
|9| 0|

Given e, f can have two values:

```
f ≡ 2×e [10]     (if f is even)
f ≡ 2×e-1 [10]   (if f is odd)
```

And we now can say:

```
n ≡ f[10]
```

We can remark that `a` and `f` are necessarily of the same parity (and `n` is too).

Given `n ≡ f[10]` and `n ≡ a[12]` we have `u` and `v` so that:

```
n = 12×u + a = 10×v + f

thus:

12×u - 10×v = f - a
```

We define:

```
c = (f - a) ÷ 2
```

we now have:

```
6×u - 5×v = c
```

A particular solution of the equation is `(c;c)` (`c = 6×c - 5×c`):

```
6×u - 5×v = c = 6×c - 5×c
⇐⇒
6×(u-c) = 5×(v-c)
```

We can see that `6` divides `5×(v-c)`. `6` and `5` are coprime, thus (Gauss Theorem) `6` divides `v-c`, so we have a `k` so that:

```
v-c = 6×k
v = c+6×k
```

using `6×u - 5×v = c` we have:

```
6×u - 5×(c+6×k) = c
6×u - 5×c - 30×k = c
6×u - 30×k = 6×c
u = c+5×k
```

and finally using `n = 12×u + a`:

```
n = 12(c+5×k)+a = a+12×c+60×k
```

using `c = (f - a) ÷ 2` we have:

```
n = a+6×(f-a)+60×k
n = 6×f-5×a+60×k
```

and thus, splitting the cases on the parity of `a` (which is the same as the parity of `f` and `n` as we saw earlier):

```
n = 12e-5×a+60×k    if a is even
n = 12e-5×a-6+60×k  if a is odd
```

so we get the same result as the visual demo:

```
yir = ((-5×a)-(6×(a mod 2)) + 12×e) mod 60 +1
```

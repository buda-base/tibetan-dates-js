# Visual demonstration of the formula

Our variables are:
- `a` = the animal (starting at 0)
- `e` = the element (starting at 0)
- `yir` = year in Rabjung (starting at 1)

We have the following table:

|     a \\ e    | 0 (Fire) | 1 (Earth) | 2 (Iron) | 3 (Water) | 4 (Wood) |
| :------ |-----:| -----:| ----:| -----:| ----:|
|**0 (Hare)** |1 |13 |25 |37 |49|
|**1 (Dragon)** |50 |2 |14 |26 |38|
|**2 (Snake)** |51 |3 |15 |27 |39|
|**3 (Horse)** |40 |52 |4 |16 |28|
|**4 (Sheep)** |41 |53 |5 |17 |29|
|**5 (Monkey)** |30 |42 |54 |6 |18|
|**6 (Bird)** |31 |43 |55 |7 |19|
|**7 (Dog)** |20 |32 |44 |56 |8|
|**8 (Pig)** |21 |33 |45 |57 |9|
|**9 (Mouse)** |10 |22 |34 |46 |58|
|**10 (Ox)** |11 |23 |35 |47 |59|
|**11 (Tiger)** |60 |12 |24 |36 |48|

### Starting years at 0

The first thing to do in order to simplify everything is to make the years start at 0 instead of 1, and then we'll add 1 to the final result, so now we have:

|    a \\ e     | 0 | 1 | 2 | 3 | 4 |
| :------ |-----:| -----:| ----:| -----:| ----:|
|**0** |0 |12 |24 |36 |48|
|**1** |49 |1 |13 |25 |37|
|**2** |50 |2 |14 |26 |38|
|**3** |39 |51 |3 |15 |27|
|**4** |40 |52 |4 |16 |28|
|**5** |29 |41 |53 |5 |17|
|**6** |30 |42 |54 |6 |18|
|**7** |19 |31 |43 |55 |7|
|**8** |20 |32 |44 |56 |8|
|**9** |9 |21 |33 |45 |57|
|**10** |10 |22 |34 |46 |58|
|**11** |59 |11 |23 |35 |47|

let's call this value `yirr` (year in rabjung rank), and we have:

```
yir = yirr +1
```

### Deducing columns from the first one

We can first easily see that each can be constructed easily from its first value by adding `12` to the column and then applying `mod 60`. For instance for row:

|   a \\ e   | 0 | 1 | 2 | 3 | 4 |
| :------ |-----:| -----:| ----:| -----:| ----:|
|**4 (Sheep)** |40 |52 |4 |16 |28|

we have

`52 = (40+12) mod 60`
`4 = (52+12) mod 60 = 64 mod 60`
`16 = (4+12) mod 60`
`28 = (16+12) mod 60`

So we can say:

```
yirr = first_column + (12×e mod 60)
```

and thus:

```
yir = first_column + (12×e mod 60) +1
```


### Formula for the first column

Now what about the first column? we have

|   a \\ e  | 0  (Fire) |
| :--- |-----:|
|0|0 |
|1|49 |
|2|50 |
|3|39 |
|4|40 |
|5|29 |
|6|30 |
|7|19 |
|8|20 |
|9|9 |
|10|10 |
|11|59 |

Let's transform it a bit and give values that are the same when `mod 60`:

|   a \\ e  | 0  (Fire) |
| :--- |-----:|
|0|0 |
|1|-11 |
|2|-10 |
|3|-21 |
|4|-20 |
|5|-31 |
|6|-30 |
|7|-41 |
|8|-40 |
|9|-51 |
|10|-50 |
|11|-61 |

Now we can see a clearer pattern. Let's split two cases:

When `a` is even, we have:

|   a \\ e  | 0  (Fire) |
| :--- |-----:|
|0|0 |
|2|-10 |
|4|-20 |
|6|-30 |
|8|-40 |
|10|-50 |

In this case, the value is obviously `-5×a`. When `a` is odd, we have:

|   a \\ e  | 0  (Fire) |
| :--- |-----:|
|1|-11 |
|3|-21 |
|5|-31 |
|7|-41 |
|9|-51 |
|11|-61 |

In this case, the value is `(-5×a)-6`. We can actually reconcile the two values using a `mod 2` (which is `0` when `a` is even and `1` when `a` is odd) as follows:

```
first_column = (-5×a)-(6×(a mod 2)) mod 60
```

### Final value

Reconciling everything, we have:

```
yir = ((-5×a)-(6×(a mod 2)) mod 60) + (12×e mod 60) +1

yir = ((-5×a)-(6×(a mod 2)) + 12×e) mod 60 +1
```

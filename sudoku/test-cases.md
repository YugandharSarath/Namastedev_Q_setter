# Queen Moves Visualizer – Test Cases

| Input  | Expected Output (partial listing)                                             | Description                         |
|--------|-------------------------------------------------------------------------------|-------------------------------------|
| d4     | a4–h4 (horizontal), d1–d8 (vertical), a1–h8, a7–g1 (diagonals)                | Center with all directions          |
| a1     | a2–a8, b1–h1, b2–h8 (diagonals)                                               | Bottom-left corner                  |
| h5     | a5–g5, h1–h8, g4–a1, g6–a8                                                    | Right edge                          |
| h8     | a8–g8, h1–h7, g7–a1                                                           | Top-right corner                    |
| D4     | Same as d4                                                                    | Case-insensitive input              |
| z9     | []                                                                            | Invalid position                    |
| -a3    | []                                                                            | Invalid characters                  |
| b2     | a2–h2, b1–b8, a1–h8, c3–h7                                                    | Lower-left edge but not a corner    |

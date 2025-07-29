### 💡 Hints

* Use a state variable to store the **current page**
* Use another state to control the **filter toggle**
* Filter articles **before** pagination logic
* Calculate total pages using `Math.ceil`
* Slice the filtered list based on current page
* Bookmark toggle should modify state immutably (e.g., `map`)
* Reset to first page whenever the filter checkbox is toggled
* Handle empty lists gracefully when filter is on

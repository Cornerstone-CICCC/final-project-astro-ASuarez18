# Project Reflection: Aura & Arc

**Live Demo:** [Aura & ARC](https://aura-arc.netlify.app/)

## 1. Product Pages Approach: Dynamic Routing

For the product detail pages, I chose the **Dynamic Routing** approach using Astro's `[slug].astro` pattern. 

### Why I chose it
This approach allows the application to generate a unique, SEO-friendly URL for every item in the `products.json` file automatically. So you can avoid creating 10 separate HTML files for each item. It's like using a reusable component. Its clean and gives performance

### Benefits over Alternatives
*   **Scalability:** Instead of creating page for page every time you need one, lets say the collection expands to 100 items, the codebase remains the same size. 
*   **Maintainability:** Any design change made in `[slug].astro` (like changing the "Inquire for Purchase" button color) is instantly reflected across all products. So you don't need to change in each of the product pages.
*   **Performance:** Compared to a purely Client-Side Rendering (CSR) approach, given the dynamic routing these pages are pre-rended at build time, so the load speeds are fast.
### Limitations and Trade-offs
*   **Build Time:** As the catalog grows significantly (1000s items), the time required to build the project increases, as Astro must generate an HTML file for each product.
*   **Static Nature:** Since pages are generated at build time, real-time stock updates would require a re-deployment.

## 2. Object-Oriented Programming (OOP) Implementation

The core logic is encapsulated in `lib/product.ts`, following strict OOP principles:

*   **Encapsulation:** I used `private` properties (`_price`) to protect it, given we don't want it to be able to be modified.
*   **Domain Methods:** I implemented `getFormattedPrice()` and `isInStock()` within the `Product` class. This ensures that the UI components don't need to know *how* to format currency; they simply ask the object for its formatted string.
*   **Data Integrity:** The `ProductCatalog` class ensures that raw JSON is always transformed into validated Class instances before reaching the UI.

## 3. TypeScript & Technical Structure

*   **Type Safety:** I defined the `ProductData` interface for raw JSON and used the `Product` class as a type for component `Props`. This ensures that if a property is missing or mistyped in the data, the build will fail immediately rather than breaking for the user.

## 4. Interactive Feature: The Category Filter

I implemented a category filter on the main products page using **jQuery**. 

*   **Mechanism:** The filter listens for clicks on category buttons, clears the grid via jQuery's `.empty()` method, and re-renders the filtered list using the `getProductsByCategory` methods.
*   **User Experience:** Added smooth CSS and jQuery animations to provide a premium "boutique" feel during transitions, keeping the state in plain variables as requested.

### 5. Conclusion
This project (and specially the course) helped me comprehend how to bridge the gap between the web design and functionality of a web page. By implementing a custom **OOP-driven data layer** using **Astro**, it was possible to create a scalable, maintainable system, instead of a simple static site .

Using **TypeScript** ensures that the inventory (data of the site) remained robust and error-free, while the use of **jQuery** for dynamic filtering provided the fluid, interactive experience expected professional website. 
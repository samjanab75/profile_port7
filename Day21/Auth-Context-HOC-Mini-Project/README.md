# Auth + Context + HOC Mini Project

A beginner-friendly React authentication flow using **Context API**, **useContext**, **useState**, a **Higher-Order Component (HOC)**, JavaScript functions/objects/conditional rendering, and **Tailwind CSS**.

Theme: butter yellow + water green + cocoa brown.

## 1. Requirements

Install these first:
- Node.js (LTS version)
- VS Code (recommended)
- A browser such as Chrome

Check Node and npm in the VS Code terminal:

```bash
node -v
npm -v
```

## 2. Run the project

1. Extract the ZIP file.
2. Open the extracted `Auth-Context-HOC-Mini-Project` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install dependencies:

```bash
npm install
```

5. Start the Vite development server:

```bash
npm run dev
```

6. Open the local URL shown in the terminal (usually `http://localhost:5173`).

If PowerShell blocks the `npm` command on Windows, try:

```bash
npm.cmd install
npm.cmd run dev
```

To create a production build:

```bash
npm run build
```

## 3. Test the authentication flow

1. Initially, the Navbar shows **Guest mode**.
2. The Dashboard shows **Please Login** because `user` is `null`.
3. Click **Login as Bala**.
4. `AuthContext` updates the user to `{ name: "Bala", role: "Admin" }`.
5. The Navbar displays **Welcome Bala** and a **Logout** button.
6. The protected Dashboard displays **Welcome Bala** and **Role: Admin**.
7. Click **Logout**. The user becomes `null`; the dashboard is protected again.

## 4. Project folder structure

```text
Auth-Context-HOC-Mini-Project/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── context/
    │   └── AuthContext.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Login.jsx
    │   └── Dashboard.jsx
    └── hoc/
        └── withAuth.jsx
```

## 5. How each file works

- `main.jsx`: React entry point. It wraps the app with `AuthProvider`, so every child can access authentication data.
- `AuthContext.jsx`: Creates the context, stores `user` with `useState`, and shares `login` and `logout`.
- `Navbar.jsx`: Uses `useContext` to read the user and show Welcome/Logout or Guest mode.
- `Login.jsx`: Calls the shared `login()` function when the button is clicked.
- `Dashboard.jsx`: Displays the signed-in user's name and role.
- `withAuth.jsx`: HOC checks whether a user exists. If not, it returns the Please Login UI; otherwise it renders the dashboard.
- `App.jsx`: Combines the page components and wraps Dashboard with `withAuth`.
- `index.css`: Loads Tailwind layers and global CSS.

## 6. React concepts used

### A. `createContext()`
Creates a shared place to store values that many components need.

```jsx
export const AuthContext = createContext(null);
```

### B. Context Provider
`AuthContext.Provider` makes its `value` available to child components.

```jsx
<AuthContext.Provider value={{ user, login, logout }}>
  {children}
</AuthContext.Provider>
```

### C. `useState()`
Stores changing component data. Here, the initial user is `null`.

```jsx
const [user, setUser] = useState(null);
```

### D. `useContext()`
Reads the nearest Provider's value without passing props through every component.

```jsx
const { user, logout } = useContext(AuthContext);
```

### E. Higher-Order Component (HOC)
A HOC is a function that receives a component and returns an enhanced component.

```jsx
function withAuth(WrappedComponent) {
  return function ProtectedComponent(props) {
    const { user } = useContext(AuthContext);
    if (!user) return <p>Please Login</p>;
    return <WrappedComponent {...props} />;
  };
}
```

### F. Conditional rendering
Displays different UI depending on whether `user` exists.

```jsx
{user ? <p>Welcome {user.name}</p> : <p>Guest mode</p>}
```

### G. Props and children
- `children` lets `AuthProvider` render the components placed inside it.
- `props` allows the HOC to pass received properties to the wrapped component.

## 7. JavaScript concepts used

- **Objects:** the user is represented as `{ name: "Bala", role: "Admin" }`.
- **Functions:** `login()` and `logout()` perform actions.
- **Destructuring:** `const { user, logout } = useContext(AuthContext)` extracts object properties.
- **Arrow functions / callbacks:** React event handlers can be passed as function references, such as `onClick={login}`.
- **`if` condition:** the HOC checks `if (!user)` before rendering the protected component.
- **`null`:** represents the absence of a logged-in user.
- **Spread syntax:** `<WrappedComponent {...props} />` forwards props to the wrapped component.
- **ES module imports/exports:** files share components and functions using `import` and `export`.

## 8. Tailwind CSS concepts used

Tailwind uses utility classes directly in JSX:
- `bg-cream`, `text-forest`, `text-cocoa`: background and text colors.
- `p-6`, `px-5`, `py-4`: padding.
- `rounded-3xl`, `rounded-full`: rounded corners.
- `grid`, `flex`, `items-center`, `justify-between`: layout.
- `grid-cols-2`, `lg:grid-cols-2`: responsive grid layout.
- `sm:px-8`, `lg:py-14`: styles applied at screen breakpoints.
- `hover:bg-forest`, `focus:ring-4`: interaction and focus states.
- `shadow-soft`: custom shadow configured in `tailwind.config.js`.

The custom palette is configured in `tailwind.config.js`: `butter`, `leaf`, `forest`, `cocoa`, and `cream`.

## 9. Important learning note

This is a **front-end learning demo**, not production authentication. The Login button does not verify a password or contact a server. A real application should authenticate through a backend, use secure server-managed sessions or carefully implemented tokens, validate inputs, and protect backend API routes. Hiding a React component alone does not secure backend data.

## 10. Useful commands

```bash
npm install       # install project packages
npm run dev       # start development server
npm run build     # create production files in dist/
npm run preview   # preview the production build
```

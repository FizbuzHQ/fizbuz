// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/connections/new"
        page={ConnectionsNewConnectionPage}
        name="newConnection"
      />
      <Route
        path="/connections/{id}/edit"
        page={ConnectionsEditConnectionPage}
        name="editConnection"
      />
      <Route
        path="/connections/{id}"
        page={ConnectionsConnectionPage}
        name="connection"
      />
      <Route
        path="/connections"
        page={ConnectionsConnectionsPage}
        name="connections"
      />
      <Route path="/" page={LandingPage} name="landing" />
      <Route path="/users/new" page={UsersNewUserPage} name="newUser" />
      <Route path="/users/{id}/edit" page={UsersEditUserPage} name="editUser" />
      <Route path="/users/{id}" page={UsersUserPage} name="user" />
      <Route path="/users" page={UsersUsersPage} name="users" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
